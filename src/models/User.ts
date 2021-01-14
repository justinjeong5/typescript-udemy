interface UserProps {
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

}
