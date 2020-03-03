import React from 'react'

export default function Person(props) {
  let output = ''
  
  if (props.person.id === 1) {
    output = <div>{props.person.name}</div>
  }

  return output;
  
}
