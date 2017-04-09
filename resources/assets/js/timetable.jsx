import React from 'react';

class TimeTable extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <section id="timetable" className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-10 col-md-offset-2">
            <h1>TIMETABLE</h1>
            <h4>22 April 2017, KMUTT</h4>
          </div>
        </div>
        <div className="row">
          <Time time="13:00 - 13:30" />
          <Event event="ลงทะเบียน" />
        </div>
        <div className="row">
          <Time time="13:30 - 13:40" />
          <Event event="พิธีเปิดโครงการ" />
        </div>
        <div className="row">
          <Time time="13:40 - 14:20" />
          <Event event="Session I" />
        </div>
        <div className="row">
          <Time time="14:20 - 15:00" />
          <Event event="Session II" />
        </div>
        <div className="row">
          <Time time="15:00 - 15:30" />
          <Event event="พักรับประทานอาหารว่าง และ" />
          <Event event="แลกเปลี่ยนกันตามอัธยาศัย" />
        </div>
        <div className="row">
          <Time time="15:30 - 16:10" />
          <Event event="Session III" />
        </div>
        <div className="row">
          <Time time="16:10 - 16:50" />
          <Event event="Session IV" />
        </div>
        <div className="row">
          <Time time="16:50 - 17:00" />
          <Event event="สรุปงานและแลกเปลี่ยนกันตามอัธยาศัย" />
        </div>
      </section>
    );
  }
}

class Time extends React.Component{
  render(){
    return (
      <div className="col-xs-12 col-md-2 col-md-offset-2 time">{this.props.time}</div>
    );
  }
}

class Event extends React.Component{
  render(){
    return (
      <div className="col-xs-12 col-md-8 event">{this.props.event}</div>
    );
  }
}

export default TimeTable;
