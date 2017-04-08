import React from 'react';
 class Nav extends React.Component {
   constructor(){
     super();
   }

   render() {
     return (
       <div>
         <nav className="navbar navbar-default navbar-fixed-top">
           <div className="container-fluid">
             <div className="navbar-header">
               <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-6" aria-expanded="false">
                 <span className="sr-only">Toggle navigation</span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
               </button>
               <a href="#" className="navbar-brand">Brand</a>
             </div>

            <div className="navbar-collapse collapse" id="bs-example-navbar-collapse-6" aria-expanded="false" style={{height: '1px'}}>
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
              </ul>
            </div>

           </div>
         </nav>
       </div>
     );
   }
 }

export default Nav;
