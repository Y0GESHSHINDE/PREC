import React from 'react'
import './ForgotPage.css'
import { Link } from 'react-router-dom'

function ForgotPage() {
  return (
    <div className='container-fluid'>
      <div className="row d-flex justify-content-center" id='mainDiv' >
        <div className="col-12 col-sm-8 col-md-8 col-lg-6 col-xl-4  " id='FormDiv'>
          <div className="card col-12 text-center " id='CardBd'>
            <div className=' card-body '>
              <form className='  ' action="ok">
                <h3>Forgot Password</h3>
                <input type="name" name="" id="" placeholder='Enter Your Name' className='form-control mb-4 mt-4 ' />
                <input type="email" name="" id="" placeholder='Enter Your Surname' className='form-control mb-4 mt-4 ' />
                <input type="Date" name="" id="" placeholder='Enter Your DOB' className='form-control mb-4 mt-4 ' />
                <input type="number" name="" id="" placeholder='Enter Your mobile Number' className='form-control mb-4 mt-4 ' />
                <input type="email" name="" id="" placeholder='Enter Your Email' className='form-control mb-4 mt-4 ' />
                <Link class="btn btn-primary form-control w-25 mb-4  " type="submit" to={"/home"}>Reset</Link>
                <div><Link to={"/login"} href="" className='text-dark'>Back to login</Link></div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default ForgotPage