import React from 'react'

const Image = (props) => {
  return (
    <div>
      <img src = {`./assets/${props.source}`} alt = "example" />
    </div>
  )
}

export default Image;
