const express = require('express');
const router = express.Router();

router.use((err, req, res, next) => {
    console.log(`Timestamp: ${Date.now()}`);
    next();
});

router.route('/').get((req, res) => {
  res.send(
    `Welcome to Microservices template. This route is getting server from ${
      req.url
    }`
  );
});

module.exports = router;
