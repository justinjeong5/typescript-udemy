import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url)
.then(response=>{
  console.log(response.data);
});

// terminal: tsc index.ts 
// then, index.js exported from index.ts
//
// or just ts-node index.ts
