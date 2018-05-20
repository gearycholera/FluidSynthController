const express = require('express');
const bodyParser = require('body-parser');
//const User = require('./../database/model.js');
const fs = require('fs');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/load', (req, res) => {
  console.log(req.body.config)
  res.send('cool')
})

let port = 3000;
app.listen((process.env.PORT || port), () => console.log(`listening on port ${port}`));

