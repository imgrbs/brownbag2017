import React from 'react';
 class Nav extends React.Component {
   constructor(){
     super();
   }

   render() {
     return (
       <div>
         <nav class="navbar navbar-default navbar-fixed-top">
           <div className="container-fluid">

             <div class="navbar-header">
               <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-6" aria-expanded="false">
                 <span class="sr-only">Toggle navigation</span>
                 <span class="icon-bar"></span>
                 <span class="icon-bar"></span>
                 <span class="icon-bar"></span>
               </button>
               <a href="#" class="navbar-brand">Brand</a>
             </div>

            <div class="navbar-collapse collapse" id="bs-example-navbar-collapse-6" aria-expanded="false" style="height: 1px;">
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
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
