import React from 'react';
import ReactDom from 'react-dom'



function Greeting() {
  return (
    <React.Fragment>
  <div>
    <h4>HELLO WORLD</h4>
  </div>
  </React.Fragment>
  );
}

/* const Greeting = () => {
  return React.createElement('div', {}, React.createElement('h4', {},'hello world'));
} */

ReactDom.render(<Greeting />, document.getElementById('root'));