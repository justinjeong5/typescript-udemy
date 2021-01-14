import axios, { AxiosPromise } from "axios";
axios.defaults.baseURL = 'http://localhost:3000';

interface Identifiable {
  id: number;
}

export class Sync<T extends Identifiable> {
  fetch(id: number): AxiosPromise {
    return axios.get(`/users/${id}`)
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if(id) {
      return axios.put(`/users/${id}`, data)
    } else {
      return axios.post('/users', data)
    }
  }
}