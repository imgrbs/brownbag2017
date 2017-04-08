import React from 'react';


class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    return (
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}

class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div className="container-fluid">
        <div className="row">
          <NavBar />
        </div>
      </div>
    );
  }
}


export default App;
