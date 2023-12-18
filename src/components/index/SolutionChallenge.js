import React from 'react'


const SolutionChallenge = () => {
  return (
    <section id="solutionchallenge" className='section-spacer'>
        <div style={{display: 'flex', paddingTop: 20, paddingLeft: 70, paddingRight: 70, justifyContent: 'space-evenly', alignItems: 'center'}}>
            <div style={{flexDirection: 'column', paddingLeft: 70}}>
                <h2 className="section-title"> DSC Solution Challenge </h2>
                <p className="section-subtitle" style={{width: 500, paddingBottom: 15, paddingTop: 15}}>The Solution Challenge is a contest held in the spring where Developer Student Clubs create innovative solutions to local community problems using Google products or platforms. We will begin creating teams and brainstorming ideas in January. Join our <a href={'https://discord.gg/Bn9vzMHv'} style={{textDecoration: 'none'}}>discord</a> to stay updated!</p>
                <a
                    href={'https://events.withgoogle.com/dsc-solution-challenge/'}
                    className="hero-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn more &nbsp;
                    <i className="fa fa-external-link-alt" aria-hidden="true" style={{paddingLeft: 5}}></i>
                </a>
            </div> 
            <div>
                <iframe title="Solution Challenge" width="560" height="315" src="https://www.youtube.com/embed/s5RC0XaYQT4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    </section>
  )
}

export default SolutionChallenge
