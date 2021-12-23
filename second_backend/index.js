const express = require('express');
const { createServer } = require('http');

const app = express();
const server = createServer(app);
const port = 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const formRouter = require('./routes/form');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  // res.send('Deepbrain app.get');
});
// app.post('/reg_save', (req, res) => {
//   // res.send('<h2>hi</h2>');
//   let code = req.body.code;
//   let title = req.body.title;
//   res.send(`<h2>${code}, ${title}</h2>`);
// });

app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/form.html');
});

app.use('/form', formRouter);

server.listen(port, () => {
  console.log('Hello Deepbrain server');
});

// http://localhost:8080/blue
