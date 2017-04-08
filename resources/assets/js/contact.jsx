import React from 'react';
import Bag from '../images/bag.png';

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    return (
      <section id="contact" className="container">
        <div className="row">
          <div className="col-xs-12">
            <img src={Bag} className="baglogo" alt=""/>
          </div>

          <div className="col-xs-12">
            <h2>Brown Bag 2.0</h2>
            <h3>by Alchemist</h3>
          </div>

          <div className="col-xs-12">
            <h3>CONNECT WITH US</h3>
          </div>

          <div className="col-xs-12">
            <i className="fa fa-facebook icon" style={{
              paddingLeft:'0.7em',
              paddingRight:'0.7em',
            }}></i>
            <i className="fa fa-twitter icon"></i>
          </div>
          <div className="col-xs-12">
            <h4>CONTACT US</h4>
            <h4>Alchemist@st.sit.kmutt.ac.th</h4>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
