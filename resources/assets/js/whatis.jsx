import React from 'react';

class WhatIs extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <section id="whatis" className="container-fluid">
        <div className="row">
            <div className="col-xs-12">
                <h1>WHAT IS BROWN BAG?</h1>
                <p>     
                    <br/>
                    <span>
                        Join us for two days of interactive demos, announcements, and best practices that will keep you looking ahead. Attend sessions and interact with Facebook products and experts. Whether you’re with us in San Jose or tuning in from around the world, there’s an F8 for everyone.
                    </span>
                    <br/><br/>
                    <span>
                        บราวแบ็คเป็นงานชุมนุมรวมกลุ่มสำหรับผู้ที่สนใจแบ่งปันความรู้ ประสบการณ์ หรือเรื่องราวต่างๆให้ผู้ร่วมงานคนอื่นๆ ได้ฟังกัน งานนี้ไม่มีการกำหนดหัวข้อเอาไว้ล่วงหน้า ผู้ร่วมงานทุกคนจะเป็นผู้กำหนดหัวข้อในงาน
                    </span>
                </p>
            </div>
        </div>
      </section>
    );
  }
}


export default WhatIs;
