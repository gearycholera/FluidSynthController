import React from 'react';
import instruments from './../../../options.js';

const Channel = (props) => {
  return (
    <div>
      <span>channel {((props.ch + 1) < 10 ? '0' : '') + (props.ch + 1)} </span> <select id={props.ch} onChange={props.handleChange}>
          {instruments.map((e, key) => {
              return <option key={key} value={e.value}>{e.name}</option>;
          })}
      </select>
    </div>
  )
}

export default Channel;