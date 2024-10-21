import React from 'react'
import './HeroCard.css'
function HeroCard(props) {
   return (
      <div className='card  text-center' id='ContentCard'>
         <div className="card-body d-flex flex-column justify-content-center align-items-center  ">
            <div>
               <h4>{props.Heading}</h4>
            </div>
            <div>
               <button className='btn btn-danger'>{props.btnData}</button>
            </div>
         </div>
      </div>
   )
}

export default HeroCard