var mongoose = require('mongoose');

module.export = function(wagner){

mongoose.connect('mongodb://localhost:27017/test');

var Category = mongoose.model('Category', require('./categorySchema'),'categories');

wagner.factory('Category',function(){
    return Category;
});

return {
    Category: Category //I am back
};
    
};