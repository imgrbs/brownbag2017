import React from 'react';
import Bag from '../images/bag.png';

class WhatIs extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <section id="main" className="container-fluid">
        <div className="row">
            <div className="col-xs-12">
                <div className="col-xs-12 text-center">
                    <img src={Bag} alt="" className="mainBag"/>
                </div>
            </div>
            <div className="col-xs-12 boxDetail">
                <h1>Brown Bag 2.0</h1>
                <p>
                    <h2>22 April 2017</h2>
                    <h4>13:00 PM - 17:00 PM</h4>
                    <h2>SIT Building</h2>
                    <h4>KMUTT</h4>
                </p>
                <div className="col-xs-12 text-center mainMenu">
                    <button>WHAT'S</button>
                    <button>SESSIONS</button>
                </div>
            </div>
        </div>
      </section>
    );
  }
}


export default WhatIs;
