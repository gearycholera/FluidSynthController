const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const shell = require('shelljs');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/load', (req, res) => {
  let text = req.body.config.join('\n');
  fs.writeFile('sampleconfig.txt', text, (err) => {
    if (err) throw err;
    shell.exec('sh restartFluidSynth.sh')
    res.send('done')
  });
})

app.get('/loadpreset', (req, res) => {
  let presetFile =req.query.preset + '.txt';
  let stream = fs.createReadStream(presetFile)
  stream.on('open', () => {
    stream.pipe(fs.createWriteStream('sampleconfig.txt'));
    stream.pipe(res);
  });
  stream.on('finish', () => {
    shell.exec('sh restartFluidSynth.sh')
  });
})

app.post('/save', (req, res) => {
  let text = req.body.config.join('\n');
  let preset = 'preset0' + req.body.preset + '.txt';
  fs.writeFile(preset, text, (err) => {
    if (err) throw err;
    res.send('done')
  });
})

app.get('/reboot', (req, res) => {
  shell.exec('sudo reboot')
})

app.get('/shutdown', (req, res) => {
  shell.exec('sudo poweroff')
})

let port = 3000;
app.listen((process.env.PORT || port), () => console.log(`listening on port ${port}`));

