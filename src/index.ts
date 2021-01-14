import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

axios.post('/users', {
  name: 'justin',
  age: 31
})

axios.get('/users/1')