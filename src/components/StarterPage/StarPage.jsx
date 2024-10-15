import React from 'react'
import './StartPage.css'
function StarPage() {
   return (
      <div className="row d-flex justify-content-center " id='mainDiv' >
         <div className="col-10 col-sm-8 col-md-8 col-lg-6 col-xl-4  " id='FormDiv'>
            <div className="card col-12 text-center ">
               <div className=' card-body ' id='CardBd'>
                  <form className='  ' action="ok">
                     <h1>Wellcome to PREC</h1>
                     <h3 className='mt-3'>Login</h3>
                     <input type="email" name="" id="" placeholder='Enter Your Email' className='form-control mb-4 mt-4' />
                     <input type="email" name="" id="" placeholder='Enter Your PassWord' className='form-control mb-4' />
                     <select class="form-select mb-4" aria-label="Default select example">
                        <option selected>Class</option>
                        <option value="1">SE</option>
                        <option value="2">TE</option>
                        <option value="3">BE</option>x
                     </select>
                     <button class="btn btn-primary form-control w-25 mb-4 fs-4 " type="submit">login</button>
                     <div><a href="">Forgot Password?</a></div>
                     </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default StarPage;