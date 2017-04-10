import React from 'react';
import Bag from '../images/Bag.png';
import Evb from '../images/fbicon.png';
import Fb from '../images/evbicon.png';

class Contact extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <section id="contact" className="container-fluid">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-3 col-sm-offset-1 col-md-5 col-md-offset-1">
                <div className="col-md-3"><img src={Bag} className="baglogo" alt=""/></div>
                <div className="col-md-9 text-left">
                  <h2>Brown Bag 2.0</h2>
                  <h3>by Alchemist</h3>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-2">
                <h3>CONTACT US</h3>
                <h4>alchemist@sit.kmutt.ac.th</h4>
                <br/>
                <a href="https://sitbrownbag.eventbrite.com">
                <img src={Evb} className="evbLogo" alt=""/>
                </a>
                <a href="https://fb.com/BrownBagSITKMUTT/">
                <img src={Fb} className="evbLogo" alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="endline"></div>
      </section>
    );
  }
}

export default Contact;
