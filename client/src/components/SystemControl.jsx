import React from 'react';
import axios from 'axios';

const SystemControl = (props) => {
  let reboot = () => {
    if (confirm('Are you sure you want to reboot?')) {
      axios.get('/reboot')
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    }
  }

  let shutdown = () => {
    if (confirm('Are you sure you want to shutdown?')) {
      axios.get('/shutdown')
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    }
  }

  return (
    <div id="systemcontrols">
      <button onClick={reboot}>reboot</button>
      <button onClick={shutdown}>shutdown</button>
    </div>
  )
}

export default SystemControl;