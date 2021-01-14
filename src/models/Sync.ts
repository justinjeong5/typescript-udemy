import axios, { AxiosPromise } from "axios";
axios.defaults.baseURL = 'http://localhost:3000';
import { UserProps } from './User'

export class Sync {
  fetch(id: number): AxiosPromise {
    return axios.get(`/users/${id}`)
  }

  save(data: UserProps): AxiosPromise {
    const { id } = data;
    if(id) {
      return axios.put(`/users/${id}`, data)
    } else {
      return axios.post('/users', data)
    }
  }
}