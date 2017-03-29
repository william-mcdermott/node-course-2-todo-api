/*jshint esversion: 6 */
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.findOneAndRemove({_id: '58db2993a3329b908d5ae689'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('58db2993a3329b908d5ae689').then((todo) => {
  console.log(todo);
});
