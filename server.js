const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hi, please add some param');
});

app.get('/:echo', (req, res) => {
  res.send(req.params.echo);
});

app.listen(port, () => {
  console.log('We are live on ' + port);
})
