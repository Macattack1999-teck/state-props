import React from 'react';
import { tsPropertySignature } from '@babel/types';

export default function greeting(props) {
  return (
    <div>Hello, {props.name}</div>
  )
}

// const greeting = () => {
//   return (
//     <div>Hello</div>
//   )
// }

// export default