import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { graphql, useStaticQuery } from 'gatsby'

const Header = () => {
  const {
    websiteYaml: { university},
  } = useStaticQuery(graphql`
    {
      websiteYaml {
        university
      }
    }
  `)
  return (
    <header id="hero" className="hero">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <div className="hero-content">
              <div className="hero-title__group">
                <div className="hero-title">
                  <h2 className="zuri">
                    Developer Student Club <br /> {university}.
                  </h2>
                </div>
                <div className="Hero--Subtitle">
                  <p className="lead">
                    Developer Student Clubs is a <first-letter>G</first-letter>
                    <third-letter>o</third-letter>
                    <second-letter>o</second-letter>
                    <first-letter>g</first-letter>
                    <forth-letter>l</forth-letter>
                    <third-letter>e</third-letter> Developers program for
                    university students to learn
                    <second-letter> mobile </second-letter> and{' '}
                    <first-letter>web development skills</first-letter>,{' '}
                    <third-letter>design thinking skills</third-letter> and{' '}
                    <forth-letter>leadership skills.</forth-letter>
                  </p>
                </div>
              </div>
              <a
                    href={'https://discord.gg/Bn9vzMHv'}
                    className="hero-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fas fa-users"></i>
                    &nbsp; &nbsp;Become a member 
                </a>
            </div>
          </Col>
          <Col xs={12} sm={5} className="ml-auto ml-pic">
            <div className="hero-figure">
              <img src='https://drive.google.com/uc?export=view&id=1nw7HmOwx7f56BiHLF-lcr2P6XXyR35b8' width="100%" height="100%"className="img-fluid" alt="Illustration of diversity in our developer community" />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
