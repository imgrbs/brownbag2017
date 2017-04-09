import React from 'react';
import jump from './jump.js';

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
                   <li className="active"><a className="Brand" onClick={()=>{jump('#main', { duration: 500 })}}>Brown Bag 2.0</a></li>
                   <li><a href="https://goo.gl/IGNFOf">REGISTER</a></li>
                   <li><a onClick={()=>{jump('#whatis', { duration: 700 , offset : -50 })}}>WHAT'S</a></li>
                   <li><a onClick={()=>{jump('#timetable', { duration: 700 , offset : -50 })}}>TIMETABLE</a></li>
                   <li><a onClick={()=>{jump('#sponsor', { duration: 700 , offset : -49 })}}>SPONSOR</a></li>
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
