import React from 'react';

class TimeTable extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <section id="timetable">
        <h1>TIMETABLE</h1>
        <h4>22 April 2017, KMUTT</h4>
        <Time time="13:00 - 13:30" />
        <Event event="ลงทะเบียน" />
        <Time time="13:30 - 13:40" />
        <Event event="พิธีเปิดโครงการ" />
        <Time time="13:40 - 14:20" />
        <Event event="Session I" />
        <Time time="14:20 - 15:00" />
        <Event event="Session II" />
        <Time time="15:00 - 15:30" />
        <Event event="พักรับประทานอาหารว่าง และ แลกเปลี่ยนกันตามอัธยาศัย" />
        <Time time="15:30 - 16:10" />
        <Event event="Session III" />
        <Time time="16:10 - 16:50" />
        <Event event="Session IV" />
        <Time time="16:50 - 17:00" />
        <Event event="สรุปงานและแลกเปลี่ยนกันตามอัธยาศัย" />
      </section>
    );
  }
}

class Time extends React.Component{
  render(){
    return (
      <div className="col-xs-12 col-sm-4 col-md-4 time">{this.props.time}</div>
    );
  }  
}

class Event extends React.Component{
  render(){
    return (
      <div className="col-xs-6 col-xs-offset-4 col-sm-8 col-md-8 event">{this.props.event}</div>
    );
  }  
}

export default TimeTable;