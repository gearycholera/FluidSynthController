const express = require('express');
const bodyParser = require('body-parser');
//const User = require('./../database/model.js');
const fs = require('fs');
const shell = require('shelljs');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/load', (req, res) => {
  let text = req.body.config.join('\n');
  fs.writeFile('./sampleconfig.txt', text, (err) => {
    if (err) throw err;
    console.log('The data was appended to file');
    shell.exec('sh test.sh')
    res.send('done')
  });
})

let port = 3000;
app.listen((process.env.PORT || port), () => console.log(`listening on port ${port}`));

