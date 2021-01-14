import { User } from './models/User'

const user = new User({name:'justin', age:31});

user.on('click', ()=>{
  console.log('clicked')
})
user.on('change', ()=>{
  console.log('changed')
})

console.log(user);
