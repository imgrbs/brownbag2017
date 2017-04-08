import React from 'react';
import WhatIs from './whatis.jsx';
import Nav from './nav.jsx';
import Sponsor from './sponsor.jsx';
import TimeTable from './timetable.jsx';

class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <WhatIs />
        <Nav />
        <TimeTable />
        <Sponsor />
      </div>
    );
  }
}


export default App;
