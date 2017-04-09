import React from 'react';

 class Nav extends React.Component {
   constructor(){
     super();
   }

   render() {
     return (
       <div className="container-fluid">
         <div className="row">
           <nav id="nav" className="navbar navbar-default navbar-default-edit navbar-fixed-top" data-spy="affix" data-offset-top="197">
               <div className="navbar-header">
                 <button type="button" className="navbar-toggle navbar-toggle-edit collapsed" data-toggle="collapse" data-target="#bbnav" aria-expanded="false" style={{
                   marginRight : '1em',
                   marginTop:'1.5em',
                 }}>
                   <span className="sr-only">Toggle navigation</span>
                   <span className="icon-bar"></span>
                   <span className="icon-bar"></span>
                   <span className="icon-bar"></span>
                 </button>
               </div>

              <div className="navbar-collapse navbar-collapse-edit collapse" id="bbnav" aria-expanded="false" style={{height: '1px'}}>
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#whatis">WHAT'S</a></li>
                  <li><a href="#timetable">TIMETABLE</a></li>
                  <li><a href="#">SESSIONS</a></li>
                </ul>
              </div>

           </nav>
         </div>

       </div>
     );
   }
 }

export default Nav;
