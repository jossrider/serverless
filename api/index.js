const express = require('express');
const app = express();

app.get('*', (req, res) => {
    console.log('Hola mundo!!. Mi primera app serverless!!');
    res.send({ mensaje: 'Chanchito Happy!' });
});

module.exports = app;