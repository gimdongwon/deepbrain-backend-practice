const express = require('express');
const { createServer } = require('http');

const app = express();
const server = createServer(app);
const port = 4000;

let users = [
  {
    id: 'apple',
    password: '1234',
  },
  {
    id: 'tesla',
    password: '789',
  },
];

const findUser = (uid) => {
  let idx = -1;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === uid) {
      idx = i;
      break;
    }
  }
  return idx;
};

app.get('/', (req, res) => {
  res.send('<h2>환영합니다.</h2>');
});

app.get('/:id', (req, res) => {
  let id = req.params.id;
  console.log(id);
  if (findUser(id) === -1) {
    res.send('<h2>데이터가 없습니다.</h2>');
  } else {
    res.send(`<h2>${id}님을 환영합니다.</h2>`);
    // res.sendFile(__dirname + 'index.html');
  }
});

server.listen(port, () => {
  console.log('Deepbrain server.listen');
});

// http://localhost:8080/blue
