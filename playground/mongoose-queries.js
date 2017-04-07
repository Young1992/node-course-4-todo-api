const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// const id = '58e79a280c6435363c95061811';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

const {User} = require('./../server/models/user');

const id = '58e64b658227cf4f249e29bf';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Id not found');
  }
  console.log('User by id', user);
}).catch((e) => console.log(e));
