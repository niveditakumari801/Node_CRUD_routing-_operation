const mongoose = require('mongoose');
// // const Schema = mongoose.Schema;
// const geocoder = require('../geocoder');

const url = 'mongodb+srv://Fuel123:Fuel123@cluster0.re81y.mongodb.net/fuel?retryWrites=true&w=majority'

module.exports = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) {
        console.log('petroleum Database is connected');
    } else {
        console.log("Error is occuring in connecting", err);
    }
});