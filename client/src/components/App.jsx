import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Channel from './Channel.jsx';
import SystemControl from './SystemControl.jsx';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      channels: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.appendFile = this.appendFile.bind(this);
    this.loadPreset = this.loadPreset.bind(this);
  }

  handleChange(e) {
    let channels = this.state.channels.slice();
    channels[e.target.id] = `select ${e.target.id} 1 ${e.target.value}`;
    this.setState({channels: channels});
  }

  appendFile() {
    let config = [];
    for (var i = 0; i < this.state.channels.length; i++) {
      if (this.state.channels[i]) config.push(this.state.channels[i]);
    }
    axios.post('/load', {config: config})
    .then((res) => alert('config successfully loaded'))
    .catch((err) => alert('error loading config file'))
  }

  loadPreset(e) {
    let preset = e.target.id;
    axios.get('/loadpreset', {params: {preset: preset}})
    .then((res) => console.log('done'))
    .catch((err)=> console.log(err))
  }

  render() {
    let channels = [];
    for (var i = 0; i < 16; i++) {
      channels.push(<Channel key={i} ch={i} handleChange={this.handleChange}/>)
    }

    return (
      <div>
        <div id="channels">
          {channels}
        </div>
        <div id="load">
          <button id="btnload" onClick={this.appendFile}>load your config</button>
        </div>
        <div className="preset-buttons">
          <button id="preset01" onClick={this.loadPreset}>preset 1</button>
          <button id="preset02" onClick={this.loadPreset}>preset 2</button>
          <button id="preset03" onClick={this.loadPreset}>preset 3</button>
        </div>
        <div>
          <SystemControl />
        </div>
      </div>
    )
  }

};