import React from 'react';

const Channel = (props) => {
  return (
    <div>
      <input type="text" placeholder={'channel ' + (props.ch)}></input>
    </div>
  )
}

export default Channel;