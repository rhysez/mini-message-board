var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date()
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date()
  }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New message' })
})

router.post('/new', function(req, res, next) {
  const messageUser = req.body.messageUser;
  const messageText = req.body.messageText;
  
  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date()
  })

  res.redirect('/');
})

module.exports = router;
