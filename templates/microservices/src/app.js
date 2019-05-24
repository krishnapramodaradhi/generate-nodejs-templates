const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');

const route = require('./api/v1/routes/route');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());

app.disable('x-powered-by');

app.use((err, req, res, next) => {
    next(err);
});

app.use('/', route);

module.exports = app;