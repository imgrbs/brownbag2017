import React from 'react';

 class Nav extends React.Component {
   constructor(){
     super();
   }

   render() {
     return (
       <div className="container-fluid">
         <div className="row">
           <nav className="navbar navbar-default navbar-default-edit navbar-fixed-top">
               <div className="navbar-header">
                 <button type="button" className="navbar-toggle navbar-toggle-edit collapsed" data-toggle="collapse" data-target="#bbnav" aria-expanded="false">
                   <span className="sr-only">Toggle navigation</span>
                   <span className="icon-bar"></span>
                   <span className="icon-bar"></span>
                   <span className="icon-bar"></span>
                 </button>
               </div>

              <div className="navbar-collapse navbar-collapse-edit collapse" id="bbnav" aria-expanded="false" style={{height: '1px'}}>
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">WHAT'S</a></li>
                  <li><a href="#">TIMETABLE</a></li>
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
