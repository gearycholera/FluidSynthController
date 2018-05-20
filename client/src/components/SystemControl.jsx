import React from 'react';
import axios from 'axios';

const SystemControl = (props) => {
  let reboot = () => {
    axios.get('/reboot')
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }

  let shutdown = () => {
    axios.get('/shutdown')
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }

  return (
    <div>
      <button onClick={() => reboot()}>reboot</button>
      <button onClick={() => shutdown()}>shutdown</button>
    </div>
  )
}

export default SystemControl;