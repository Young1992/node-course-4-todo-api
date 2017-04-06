//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server...');
  }
  console.log('Connected to MongoDB server...');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'testing text'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'testing text'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Young'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({name: 'Mike'}).then((result) => {
    console.log(result);
  });

  //db.close();
});
