'use strict';

var mongoose = require('mongoose');

module.export = new mongoose.schema({
   profile:{
       username:{
           type:String,
           require:String,
           lowerCase:true
       },
       picture:{
           type: String,
           required: true,
           match:/^http:\/\//i
       }
   },
   data: {
       oauth:{
           type:String,
           required: true,
       },
       cart:[{
           product: {
               type: mongoose.Schema.Types.ObjectId
           },
           quntity:{
               type: Number,
               default: 1,
               min: 1
           }
       }]
   }
    
    
});