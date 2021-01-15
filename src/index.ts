import { User } from './models/User'

const user = new User({name: 'new record', age: 9090});

user.on('change', ()=>{
  console.log('changed')
})

user.trigger('change')