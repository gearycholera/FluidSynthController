import React from 'react';
import instruments from './../../../options.js';

const Channel = (props) => {
  let ch = props.ch + 1;

  return (
    <div>
      <span>channel {(ch < 10 ? '0' : '') + ch}</span> <select id={props.ch} onChange={props.handleChange}>
        {instruments.map((e, key) => {return <option key={key} value={e.value}>{e.name}</option>})}
      </select>
    </div>
  )
}

export default Channel;