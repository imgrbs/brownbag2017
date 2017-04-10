import React from 'react';
import Bag from '../images/Bag.png';

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
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

              <div className="col-xs-12 col-sm-4">
                <h3>CONNECT WITH US</h3>
                <a href="https://fb.com/BrownBagSITKMUTT/">
                  <i className="fa fa-facebook icon" style={{
                    paddingLeft:'0.7em',
                    paddingRight:'0.7em',
                  }}></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter icon"></i>
                </a>
              </div>

              <div className="col-xs-12 col-sm-4">
                <h3>CONTACT US</h3>
                <h4>Alchemist@st.sit.kmutt.ac.th</h4>
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
