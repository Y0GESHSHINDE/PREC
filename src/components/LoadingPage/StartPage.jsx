import React from 'react'
import './StartPage.css'
import { Link } from 'react-router-dom'

function StartPage() {
  return (
    <div className="container-fluid img-fluid bg-image align-content-center">
      <div className="row d-flex justify-content-center">
        <div className="col-12 text-center">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-6 col-sm-10">
              <div className="card bg-trans rounded-5 p-0">
                <div className="card-body mt-2 mb-2 ">
                  <h1 id='h1heading'>Wellcome To PREC</h1>
                  <h6>(electronics and telecommunication department)</h6>
                  <div>
                    <Link to={"/Login"} className="btn btn-primary m-1">Login</Link>
                  </div>
                  <div>
                    <button className="btn btn-primary m-1"><a href="https://pravaraengg.org.in/index.html" target='_blank'>More About Prec</a></button>
                  </div>
                  <div>
                    <button className="btn btn-primary m-1"><a href="https://www.pravaraengg.org.in/etc.html" target='_blank'>More About ETC Department</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartPage