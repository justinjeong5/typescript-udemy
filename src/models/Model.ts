import { AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttribute<T> {
  get<K extends keyof T>(key: K): T[K];
  set(update: T): void;
  getAll(): T;
}

interface ApiSync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface Identifiable {
  id?: number;
}

export class Model<T extends Identifiable> {
  constructor(
    private attribute: ModelAttribute<T>,
    private events: Events,
    private sync: ApiSync<T>
  ){}

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attribute.get;
  
  set(update: T): void {
    this.attribute.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');
    if(typeof id !== 'number'){
      throw new Error('cannot fetch without an Id');
    }
    this.sync.fetch(id)
    .then((response: AxiosResponse): void => {
      this.set(response.data);
    })
  }

  save(): void {
    this.sync.save(this.attribute.getAll())
    .then((response: AxiosResponse): void => {
      this.trigger('save');
    })
    .catch(() => {
      this.trigger('error');
    })
  }
}