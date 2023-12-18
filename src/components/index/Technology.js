import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Technology = ({ header, body, link, children, even, img, alt, index }) => {
  const image = (
    <Col sm={6}>
      <div className="feature-list-image">
        <img src={img} className="img-fluid" alt={alt} width="100%" height="50%"/>
      </div>
    </Col>
  )

  const description = (
    <Col sm={5} ml="auto" className="ml-auto">
      <div className="feature-list-wrapper">
        <div className="content-header">
          <h2 className="content-title">{header}</h2>
          <p>{body}</p>
        </div>
        <a
          href={link}
          className="hero-button"
          target="_blank"
          rel="noopener noreferrer"
          alt={`link to ${header} section`}
        >
          Codelabs &nbsp;
          <i className="fa fa-external-link-alt" aria-hidden="true" style={{paddingLeft: 5}}></i>
        </a>
      </div>
    </Col>
  )

  return (
    <section
      id="technologies"
      className={`section-spacer ${even ? 'bg-very__gray' : ''}`}
    >
      <Container>
        {children}
        <Row
          className={
            even
              ? 'align-items-center'
              : 'flex-column-reverse flex-sm-row align-items-cengit ter'
          }
        >
          {even ? [image, description] : [description, image]}
        </Row>
      </Container>
    </section>
  )
}

export default Technology
