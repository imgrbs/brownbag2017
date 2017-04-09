import React from 'react';
import Bag from '../images/bag.png';
import jump from './jump.js';

class WhatIs extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <section id="main" className="container-fluid">
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="col-xs-12 text-center">
                    <img src={Bag} alt="" className="mainBag"/>
                </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 boxDetail text-center">
                <h1>Brown Bag 2.0</h1>
                <div className="row">
                  <div className="col-xs-offset-2 col-xs-2 col-md-1 col-md-offset-2">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                  </div>
                  <div className="col-xs-8">
                    <h2>22 April 2017</h2>
                    <h4>13:00 PM - 17:00 PM</h4>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-offset-2 col-xs-2 col-md-1 col-md-offset-2">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </div>
                  <div className="col-xs-8">
                    <h2>SIT Building</h2>
                    <h4>KMUTT</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-8 col-md-8 text-center mainMenu">
                      <a onClick={()=>{jump('#whatis', { duration: 700 , offset : -50 })}} className="whatis-btn">WHAT'S</a>
                      <a href="https://goo.gl/IGNFOf" className="session-btn">REGISTER</a>
                  </div>
                </div>
            </div>
        </div>
      </section>
    );
  }
}


export default WhatIs;
