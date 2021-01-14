import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = 'http://localhost:3000';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

// typescript takes '() => void as' 'Callback has no argument and returns nothing'
type Callback = () => void

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): (string | number) {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update)
  }

  on(eventName: string, callback: Callback): void {
    const handler = this.events[eventName] || [];
    handler.push(callback);
    this.events[eventName] = handler;
  }

  trigger(eventName: string): void {
    const handler = this.events[eventName];
    if(!handler || handler.length === 0) return;

    handler.forEach(callback => {
      callback()
    })
  }

  fetch(): void {
    axios.get(`/users/${this.get('id')}`)
    .then((response: AxiosResponse): void => {
      this.set(response.data);
    })
  }

  save(): void {
    const id = this.get('id');
    if(id) {
      axios.put(`/users/${id}`, this.data)
    } else {
      axios.post('/users', this.data)
    }
  }
}
