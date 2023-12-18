import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Overview from './Overview'
import { graphql, useStaticQuery } from 'gatsby'

const Overviews = () => {
  const {
    allOverviewYaml: { nodes: overviews },
  } = useStaticQuery(graphql`
    {
      allOverviewYaml(limit: 3) {
        nodes {
          header
          body
        }
      }
    }
  `)

  const icons = [
    {
      icon: "fa fa-rocket fa-3x ghost-blue",
    },
    {
      icon: "fas fa-lightbulb fa-3x ghost-red",
    },
    {
      icon: "fa fa-users fa-3x ghost-green",
    },
  ]

  return (
    <section id="overview" className="section-spacer">
      <Container>
        <Row>
          {overviews.map((overview, i) => (
            <Overview {...overview} {...icons[i]} key={i} />
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Overviews
