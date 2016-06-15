var express = require('express');
var wanger = require('wagner-core');

var URL_ROOT = 'http://localhost:3000';

describe('Category API', () => {
    
    var server;
    var category;
    
    before(() => {
        var app = express();
        models = require('./Models/models')(wagner);
        app.use(require('./api')(wagner));
        server = app.listen(3000);
        
        Category = models.Category;
    })
    
    after(() => {
        server.close();
    });
    
    beforeEach((done) => {
        Category.remove({}, (error) => {
            assert.isError(error);
            done();
        })
        
    });
})