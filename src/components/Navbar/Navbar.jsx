import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
   return (
      <div>
         <nav class="navbar navbar-expand-sm bg-body-tertiary">
            <div class="container-fluid">
               <a class="navbar-brand" href="#">PREC-ETC</a>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                     <li class="nav-item">
                        <Link to={"/home"} class="nav-link active" aria-current="page" >Home</Link>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#">Groups</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link " aria-current="page" href="#">Notification</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#">Profile</a>
                     </li>

                  </ul>

               </div>
            </div>
         </nav>
      </div>
   )
}

export default Navbar;