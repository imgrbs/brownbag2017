import React from 'react';
import WhatIs from './whatis.jsx';
import Sponsor from './sponsor.jsx';

class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <WhatIs />
        <Sponsor />
      </div>
    );
  }
}


export default App;
