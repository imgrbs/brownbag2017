import React from 'react';
import Sit from '../images/SIT.svg';
import Alch from '../images/alchLogo.png';

class Sponsor extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <section id="sponsor" className="container-fluid">
        <div className="row">
            <div className="col-xs-12 text-center">
                <p>
                    <h1>Sponsor</h1>
                    <img src={Sit} alt="" className="SIT"/>
                    <h2>Create By</h2>
                    <img src={Alch} alt="" className="logo"/>
                </p>
            </div>
        </div>
      </section>
    );
  }
}


export default Sponsor;
