const express = require('express');

const router = express.Router();

router.post('/reg_save', (req, res) => {
  res.send(req.body);
  //   res.send(`<h2>${req.body.code}, ${req.body.title}</h2>`);
});

module.exports = router;
