const express = require('express');
const bodyParser = require('body-parser');
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
    shell.exec('sh restartFluidSynth.sh')
    res.send('done')
  });
})

app.get('/preset01', (req, res) => {
  let stream = fs.createReadStream('preset01.txt').pipe(fs.createWriteStream('sampleconfig.txt'));
  stream.on('finish', () => res.send('done'))
})

app.get('/reboot', (req, res) => {
  shell.exec('sudo reboot')
})

app.get('/shutdown', (req, res) => {
  shell.exec('sudo poweroff')
})

let port = 3000;
app.listen((process.env.PORT || port), () => console.log(`listening on port ${port}`));

