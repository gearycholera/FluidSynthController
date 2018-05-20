const express = require('express');
const bodyParser = require('body-parser');
//const User = require('./../database/model.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

let port = 3000;
app.listen((process.env.PORT || port), () => console.log(`listening on port ${port}`));

