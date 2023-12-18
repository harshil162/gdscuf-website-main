import React from 'react'

const FutureEvents = ({ header, body }) => (
    <>
    {/* <h4 className="justify-content-center">Check back soon!</h4> */}
    
    <div className="row justify-content-center"> 
        <div className="col-md-4 col-12"> {/* Firebase Workshop*/}
          <div className="card event-card">
            <img className="card-img-top" src='https://drive.google.com/uc?export=view&id=1G-BvdhWqqmOS3poc1AdGBvoQigCd97Mg' alt="Solution Challenge Mixer poster"/>
            <div className="card-body">
                <h5 className="card-title">Spring GBM #1</h5>
                <table>
                <thead>
                    <tr>
                        <td width="15%" className="text-blue"><i className="far fa-calendar-alt"></i></td>
                        <td> Date TBD, 2024 </td>
                    </tr>
                    <tr>
                        <td className="text-green"><i className="far fa-clock"></i></td>
                        <td>Time TBD </td>
                    </tr>
                    </thead>
                </table>
                <a href="https://dsc.community.dev/events/details/developer-student-clubs-university-of-florida-presents-spring-gbm-3/" className="button float-right">Learn More</a>
            </div>
          </div>
        </div>
    </div>
    </>
)

export default FutureEvents
