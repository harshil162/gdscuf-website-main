import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Faq from './Faq'
import { graphql, useStaticQuery } from 'gatsby'

const Faqs = () => {
  const {
    faqsYaml: {
      header,
      faqs: [faq1, faq2, faq3, faq4],
    },
  } = useStaticQuery(graphql`
    {
      faqsYaml {
        header
        faqs {
          header
          body
        }
      }
    }
  `)

  return (
    <section id="faqs" className="section-spacer section-faq">
      <Container>
        <header className="section-header text-center">
          <h2 className="section-title">{header}</h2>
        </header>
        <Row className="row">
          <Faq {...faq1} />
          <Faq {...faq2} />
        </Row>
        <Row>
          <Faq {...faq3} />
          <Faq {...faq4} />
        </Row>
      </Container>
    </section>
  )
}

export default Faqs
