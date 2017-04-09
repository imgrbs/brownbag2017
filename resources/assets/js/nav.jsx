import React from 'react';

 class Nav extends React.Component {
   constructor(){
     super();
   }

   render() {
     return (
       <div className="container-fluid">
         <div className="row">

           <nav class="navbar navbar-inverse" data-spy="affix" data-offset-top="500">
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

             <div className="navbar-collapse navbar-collapse-edit collapse text-center" id="bbnav" aria-expanded="false" style={{height: '1px'}}>
               <div className="container">
                 <ul className="nav navbar-nav">
                   <li className="active"><a href="#whatis" id="toWhatis">WHAT'S</a></li>
                   <li><a href="#timetable" id="toTimetable">TIMETABLE</a></li>
                   <li><a href="#">SESSIONS</a></li>
                 </ul>
               </div>
             </div>
            </nav>

         </div>

       </div>
     );
   }
 }

export default Nav;
