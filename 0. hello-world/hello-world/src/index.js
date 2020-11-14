import React from 'react';
import ReactDOM from 'react-dom';

var style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'Arial'
}

// const title = React.createElement(
//   'h1',
//   {id: 'title', className: 'header', style: style},
//   'Hello World'
// )

ReactDOM.render(
  //title,
  <div style={style}>
    <h1 id="heading-element">Hello World!</h1>
    <p>We're glad you're here!</p>
  </div>,
  document.getElementById('root')
)