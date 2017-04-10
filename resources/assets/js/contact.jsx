import React from 'react';
import Bag from '../images/Bag.png';
import Evb from '../images/eventbrite_logo.png';

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
              <div className="col-xs-12 col-sm-3 col-sm-offset-1">
                <img src={Bag} className="baglogo" alt=""/>
                <h2>Brown Bag 2.0</h2>
                <h3>by Alchemist</h3>
              </div>
              <div className="col-xs-12 col-sm-4 col-sm-offset-4">
                <h3>CONTACT US</h3>
                <h4>alchemist@sit.kmutt.ac.th</h4>
                <a href="https://fb.com/BrownBagSITKMUTT/">
                  <i className="fa fa-facebook icon" style={{
                    paddingLeft:'0.7em',
                    paddingRight:'0.7em',
                  }}></i>
                </a>
                <a href="https://sitbrownbag.eventbrite.com">
                <img src={Evb} className="evbLogo" alt=""/>
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
