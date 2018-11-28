const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');

const config = require('./config/config');
const route = require('./api/v1/routes/route');

const app = express();
const PORT = process.env.PORT || config.port;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use((err, req, res, next) => {
    next(err);
});

app.use('/', route);

app.listen(PORT, () => {
    console.log(`Express server started on port ${PORT}`);
})


