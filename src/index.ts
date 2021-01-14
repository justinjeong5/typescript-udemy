import { User } from './models/User'

const user = new User({name:'justin', age:31});

user.on('click', ()=>{
  console.log('clicked #1')
})
user.on('click', ()=>{
  console.log('clicked #2')
})
user.on('change', ()=>{
  console.log('changed #1')
})

user.trigger('click');
user.trigger('change');
