'use strict';

const mongoose = require('mongoose');
const connection = require('./connection/connection');
const schema = require('./Schema/UserSchema');

connection(mongoose);

var User = mongoose.model('User',schema,'users');
var user = new User({
    name: 'Mourya',
    email: 'mourya@gmail.com'
});

user.save((error)=>{
    if(error){
        console.log(error);
         process.exit(1);
    }
    console.log('User Inserted');
});

User.find({},(error,docs)=>{
    if(error)
    {
        console.log('error occured');
        process.exit(1);
    }
    console.log(docs);
    process.exit(1);
});
