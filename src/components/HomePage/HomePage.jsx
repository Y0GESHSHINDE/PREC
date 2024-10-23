import React from 'react'
import HeroCard from '../cards/HeroCard';
import Navbar from '../Navbar/Navbar';
import './HomePage.css'
function HomePage() {
   return (
      <>
         <Navbar />
         <div className='container-fluid min-vh-100 d-flex align-items-center' id='mainbg'  >
            <div className="row d-flex justify-content-center">
               <div className="col-12 col-xl-8 ">
                  <div className="row d-flex justify-content-center">
                     <div className="col-12 col-sm-6 col-md-6 col-lg-4 mt-5 ">
                        {<HeroCard Heading="Marks" btnData=" check" />}
                     </div>
                     <div className="col-12 col-sm-6 col-md-6 col-lg-4  mt-5  ">
                        {<HeroCard Heading="Timetable " btnData=" check" />}
                     </div>
                     <div className="col-12 col-sm-6 col-md-6 col-lg-4  mt-5 ">
                        {<HeroCard Heading="Exam Schedules" btnData=" check" />}
                     </div>
                     <div className="col-12 col-sm-6 col-md-6 col-lg-4 mt-5  ">
                        {<HeroCard Heading="Department Announcements" btnData=" check" />}
                     </div>
                     <div className="col-12 col-sm-6 col-md-6 col-lg-4 mt-5">
                        {<HeroCard Heading="Class Attendance" btnData=" check" />}
                     </div>
                     <div className="col-12 col-sm-6 col-md-6 col-lg-4 mt-5">
                        {<HeroCard Heading="Study Materials" btnData=" check" />}
                     </div>
                     <div className="col-12 col-sm-6 col-md-6 col-lg-4 mt-5">
                        {<HeroCard Heading="Feedback System" btnData=" check" />}
                     </div>
                     <div className="col-12 col-sm-6 col-md-6 col-lg-4 mt-5">
                        {<HeroCard Heading="Resume Building Tool" btnData=" check" />}
                     </div>
                     <div className="col-12 col-sm-6 col-md-6 col-lg-4 mt-5 mb-3">
                        {<HeroCard Heading="To-Do Lists" btnData=" check" />}
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default HomePage;