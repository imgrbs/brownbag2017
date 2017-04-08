import React from 'react';
import WhatIs from './whatis.jsx';
import Nav from './nav.jsx';
import Sponsor from './sponsor.jsx';
import Contact from './contact.jsx';

class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <WhatIs />
        <Nav />
        <Sponsor />
        <Contact />
      </div>
    );
  }
}


export default App;
