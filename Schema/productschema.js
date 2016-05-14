'use strict';

var mangoose = require('mangoose');
var Category = require('./categorySchema');

var productSchema = {
    name:{
        type:String,
        required:true
    },
    picture:[
          {
                type:String,
                match:/^http:\/\//i
            }
        ],
    price:{
        amount:{type:Number, required: true},
        currency:{
            type: String,
            enum:['USD', 'EUR', 'GBP'],
            required: true
        }
    },
    category: Category.categorySchema 
}

module.export = new mongoose.Schema(productSchema);
module.export.productSchema = productSchema;