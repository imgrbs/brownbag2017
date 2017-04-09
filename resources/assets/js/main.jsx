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
            <div className="col-xs-12 boxDetail text-center">
                <h1>Brown Bag 2.0</h1>
                <p className="">
                    <span className="col-xs-2 col-xs-offset-2 icon-main">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                    </span>
                    <span className="col-xs-7 detail-main">
                        <h2>22 April 2017</h2>
                        <h4>13:00 PM - 17:00 PM</h4>
                    </span>
                    <span className="col-xs-2 col-xs-offset-2 icon-main">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                    <span className="col-xs-7 detail-main">
                        <h2>SIT Building</h2>
                        <h4>KMUTT</h4>
                    </span>
                </p>
                <div className="col-xs-12 text-center mainMenu">
                    <a href="#" className="whatis-btn">WHAT'S</a>
                    <a href="#" className="">SESSIONS</a>
                </div>
            </div>
        </div>
      </section>
    );
  }
}


export default WhatIs;
