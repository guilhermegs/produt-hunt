const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requiredDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/product-hunt', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
requiredDir('./src/models/');

app.use('/api', require('./src/routes'));


app.listen(3001);