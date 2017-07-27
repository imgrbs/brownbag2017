import React from 'react';

class TimeTable extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <section id="timetable" className="container-fluid">
        <div className="row">
          <div className="col-xs-11 col-xs-offset-1 col-sm-10 col-sm-offset-2 col-md-10 col-md-offset-2 timetable">
            <h1>TIMETABLE</h1>
            <h4>3 August 2017, KMUTT</h4>
          </div>
        </div>
        <div className="bodyTimetable">
          <div className="row">
            <Time time="13:00 - 13:30" />
            <Event event="ลงทะเบียน" />
          </div>
          <div className="row">
            <Time time="13:30 - 14:00" />
            <Event event="พิธีเปิดโครงการ" />
          </div>
          <div className="row">
            <Time time="14:00 - 14:35" />
            <Event event="Session I" />
          </div>
          <div className="row">
            <Time time="14:40 - 15:15" />
            <Event event="Session II" />
          </div>
          <div className="row">
            <Time time="15:15 - 15:30" />
            <Event event="พักรับประทานอาหารว่าง และ" />
            <Event event="แลกเปลี่ยนกันตามอัธยาศัย" />
          </div>
          <div className="row">
            <Time time="15:30 - 16:05" />
            <Event event="Session III" />
          </div>
          <div className="row">
            <Time time="16:10 - 16:30" />
            <Event event="สรุปงานและแลกเปลี่ยนกันตามอัธยาศัย" />
          </div>
        </div>
      </section>
    );
  }
}

class Time extends React.Component{
  render(){
    return (
      <div className="col-xs-11 col-xs-offset-1 col-sm-3 col-sm-offset-2 col-md-2 col-md-offset-2 time">{this.props.time}</div>
    );
  }
}

class Event extends React.Component{
  render(){
    return (
      <div className="col-xs-11 col-xs-offset-1 col-sm-6 col-sm-offset-0 col-md-6 col-md-offset-0 event">{this.props.event}</div>
    );
  }
}

export default TimeTable;
