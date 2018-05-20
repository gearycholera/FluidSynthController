import React from 'react';

const Channel = (props) => {
  return (
    <div>
      <input type="text" onChange={props.handleInput} id={props.ch} placeholder={'channel ' + (props.ch + 1)}></input>
    </div>
  )
}

export default Channel;