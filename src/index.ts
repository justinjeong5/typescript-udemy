import { User } from './models/User'

const user = new User({ id: 1 });

user.set({ name: 'newName#2', age: 10000 })
user.save();
