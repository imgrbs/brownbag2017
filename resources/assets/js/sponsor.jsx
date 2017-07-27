import React from 'react';
import Sit from '../images/SIT.svg';
import Alch from '../images/alchLogo.png';
import KMUTT from '../images/kmutt_logo.svg';

class Sponsor extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <section id="sponsor" className="container-fluid">
        <div className="row">
            <div className="col-xs-12 text-center">
                <h1>Sponsors</h1>
                <br/>
                <img src={KMUTT} alt="" className="KMUTT"/><br/>
                <img src={Sit} alt="" className="SIT"/>
                <br/>
                <br/>
                <h2>Created By</h2>
                <img src={Alch} alt="" className="logo"/>
            </div>
        </div>
      </section>
    );
  }
}


export default Sponsor;
