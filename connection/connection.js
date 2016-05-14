'use strict';

const mongoose = require('mongoose');
module.exports = (mongooseDummy) => {
    return mongooseDummy.connect('mongodb://localhost:27017/test');
};


