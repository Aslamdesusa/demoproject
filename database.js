// Including the Mongoose ORM to connect with Mongo DB
const Mongoose = require('mongoose');

// uri for connection with data base with user and password
const mongoDbUri = 'mongodb://demo:demo123@ds125469.mlab.com:25469/tesing-project';

// Making connection with 'MongoDB'
Mongoose.connect(mongoDbUri, { useMongoClient:true })

//Variable to store the database connection
var db = Mongoose.connection;

//Handling errors!
db.on('error', console.error.bind(console, 'connection error'));


db.once('open', function callback(){
    console.log('Connection with database succeeded ' + mongoDbUri);
});

exports.db=db;


