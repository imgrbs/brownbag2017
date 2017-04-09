import React from 'react';
import Main from './main.jsx';
import WhatIs from './whatis.jsx';
import Nav from './nav.jsx';
import Sponsor from './sponsor.jsx';
import Contact from './contact.jsx';
import TimeTable from './timetable.jsx';

class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <Main />
        <WhatIs />
        <Nav />
        <TimeTable />
        <Sponsor />
        <Contact />
      </div>
    );
  }
}


export default App;
