import axios, { AxiosResponse } from "axios";
import { Eventing } from './Eventing'

axios.defaults.baseURL = 'http://localhost:3000';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): (string | number) {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update)
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
