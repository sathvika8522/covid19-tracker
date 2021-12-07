import React from 'react'
import '../styles/Card.css'

const Card = ( {details} ) => {
    return (
        <>
        <div className="container text-center mb-5 mt-3">
           <h1>{ details['Country_text'] }</h1>
           <p> {details['Last Update']}</p>

           <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 mt-4">
               <div className="col">
                 <div class="card text-center ">
                    <div class="card-body" height="560px">
                      <h3>Total case</h3>
                      <h5> {details['Total Cases_text']} </h5>
                    </div> 
                  </div>
               </div>

               <div className="col">
                 <div class="card text-center ">
                    <div class="card-body" height="560px">
                      <h3>Active case</h3>
                      <h5> {details['Active Cases_text']} </h5>
                    </div> 
                  </div>
               </div>

               <div className="col mt-5">
                 <div class="card text-center ">
                    <div class="card-body" height="560px">
                      <h3>Deadth case</h3>
                      <h5> {details['Total Deaths_text']} </h5>
                    </div> 
                  </div>
               </div>

               <div className="col mt-5">
                 <div class="card text-center ">
                    <div class="card-body" height="560px">
                      <h3>Recover case</h3>
                      <h5> {details['Total Recovered_text']} </h5>
                    </div> 
                  </div>
               </div>
           </div>
        </div>
        </>
    )
}

export default Card
