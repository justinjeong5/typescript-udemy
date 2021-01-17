import axios, { AxiosResponse } from 'axios';
import { User, UserProps } from './User';
import { Eventing } from './Eventing'

export class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl)
    .then((response: AxiosResponse): void => {
      this.models = response.data.map((value: UserProps) => {
        return User.buildUser(value);
      })
      this.trigger('change');
    })
  }
}