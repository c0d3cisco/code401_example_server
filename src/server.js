'use strict';

// require('dotenv').config();
const express = require('express');
const cors = require('cors');

// create express singleton - only one 'app' can be created
const app = express();
// const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
  res.status(200).send('hello');
});

app.get('/success', (req, res, next) => {
  res.status(200).send('Success!!');
});

app.get('/bad', (req, res, next) => {
  next('We have an error!'); //! this will trigger an error with the next. so don't do it
});

app.use('*', (req, res, next) => {
  res.status(404).send('Not Found');
});

const start = (portFromModule) => app.listen(portFromModule, () => console.log('Server is listening in', portFromModule));
// app.listen(PORT, () => console.log('Server is listening in', PORT) );

module.exports = { start, app };