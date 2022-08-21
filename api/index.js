const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const cors = require('cors');
const meals = require('./routes/meals');
const orders = require('./routes/orders');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

app.use('/api/meals', meals);
app.use('/api/orders', orders);

module.exports = app;