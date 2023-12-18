import React, { useState } from 'react'
import PastEvents from './PastEvents'
import FutureEvents from './FutureEvents'
import BsNav from 'react-bootstrap/Nav'


const Workshops = () => {
    const [future, setFuture] = useState('active')
    const [past, setPast] = useState('')

    const clickedFuture = (future, past) => {
        setFuture('active')
        setPast('')
        console.log("future clicked")
    }

    const clickedPast = (future, past) => {
        setFuture('')
        setPast('active')
        console.log("past clicked")
    }

    return ( 
        <section id="workshops" className="section-spacer workshops-section bg-very__gray">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous" />
            <div className="container">
                <header className="section-header text-center">
                    <h2 className="section-title">Events & Workshops</h2>
                    <p className="section-subtitle">Come learn, share, and connect with us in person.</p>
                </header>
                <div className="workshops-type-switch">
                    <ul className="nav nav-pills justify-content-center js-tabs">
                        <li className="nav-item">
                            <BsNav.Link className={`nav-link ${future}`} href="#upcoming" onClick={(future, past) => clickedFuture(future, past)}>Upcoming Events</BsNav.Link>
                        </li>
                        <li className="nav-item">
                            <BsNav.Link class={`nav-link ${past}`} href="#past" onClick={(future, past) => clickedPast(future, past)}>Past Events</BsNav.Link>
                        </li>
                    </ul>
                </div>

                <div className="tab-content">
                    <div className={`tab-pane ${future}`} id="upcoming" role="tabpanel" aria-labelledby="upcoming">
                        <div className="row">
                            <FutureEvents/>
                        </div>
                    </div>
                </div>

                <div className="tab-content">
                    <div className={`tab-pane ${past}`} id="past" role="tabpanel" aria-labelledby="past">
                        <div className="row">
                            <PastEvents/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Workshops
