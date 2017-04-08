import React from 'react';
import WhatIs from './whatis.jsx';
import Nav from './nav.jsx';

class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <WhatIs />
        <Nav />
      </div>
    );
  }
}


export default App;
