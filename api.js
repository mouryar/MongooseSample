var express = require('express');
var status = require('http-status');

module.exports = function(wagner){
    var api = express.Router();
    api.get('/category/id/:id',wagner.invoke((Category) => {
        return (req,res) =>{
            Category.findOne({_id: req.param.id}, (error, category) =>{
                if(error){
                    return res.status(status.INTERNAL_SERVER_ERROR).json({error: error.toString()});
                }
                if(!category){
                    return res.status(status.NOT_FOUND).json({eerror: 'Not Found'});
                }
                
                res.json({category:category});
            });
        };
    }));
    api.get('/category/parent/:id',wagner.invoke((Category) => {
        return (req,res) =>{
            Category.find({_id: req.param.id})
            .sort({'_id':1})
            .exec(function(error, category){
                if(error){
                    return res.status(status.INTERNAL_SERVER_ERROR).json({error: error.toString()});
                }
                res.json({categories:category});
            });
        };
    }));
    return api;
}