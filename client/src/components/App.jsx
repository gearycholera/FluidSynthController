import React from 'react';
import ReactDOM from 'react-dom';
import Channel from './Channel.jsx';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      channels: []
    }
  }



  render() {
    let channels = [];
    for (var i = 0; i < 16; i++) {
      channels.push(<Channel key={i} ch={i+1} />)
    }

    return (
      <div>
        <p>make your picks</p>
        {channels}
        <button>load</button>
      </div>
    )
  }

};