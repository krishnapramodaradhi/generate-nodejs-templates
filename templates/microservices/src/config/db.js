const mongoose = require('mongoose');

mongoose.connect(
    `${process.env.MONGO_URI}`,
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => {
    console.log('Connected to DB');
});