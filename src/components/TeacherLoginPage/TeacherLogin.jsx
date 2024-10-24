import React from 'react'
import './TeacherLogin.css'
import { Link } from 'react-router-dom'
function TeacherLogin() {
   return (
      <div className='container-fluid'>
         <div className="row d-flex justify-content-center" id='mainDiv' >
            <div className="col-12 col-sm-8 col-md-8 col-lg-6 col-xl-4  " id='FormDiv'>
               <div className="card col-12 text-center " id='CardBd'>
                  <div className=' card-body '>
                     <form className='  ' action="ok">
                        <h1 id='h1heading'>Etc Department</h1>
                        <h3 className='mt-3 text-dark'> Teacher Login</h3>
                        <input type="text" name="" id="" placeholder='Enter Your Username' className='form-control mb-4 mt-4 ' />
                        <input type="email" name="" id="" placeholder='Enter Your Email' className='form-control mb-4 mt-4 ' />
                        <input type="email" name="" id="" placeholder='Enter Your PassWord' className='form-control mb-4 ' />
                        <button class="btn btn-primary form-control w-25 mb-4  " type="submit" >login</button>
                        <div><Link to={"/forgot"} href="" className='text-dark'>Forgot Password?</Link></div>

                     </form>
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}

export default TeacherLogin