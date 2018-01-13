var express = require('express');
var router = express.Router();

/* GET message data */
router.get('/messages', function (req, res, next) {
  let messageCount = 10;
  let messages = [];
  for (let counter = 0; counter < messageCount; counter++) {
    messages.push({
      id: counter,
      text: 'message ' + Math.random()
    })
  }
  res.json(messages);
});

module.exports = router;
