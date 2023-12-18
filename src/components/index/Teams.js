import React from 'react'
import Team from './Team'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useStaticQuery, graphql } from 'gatsby'

const Teams = _ => {
  const {
    allTeamsYaml: { nodes: teams },
  } = useStaticQuery(graphql`
    {
      allTeamsYaml {
        nodes {
          name
          role
          descs
          img
          social {
            github
            linkedin
            instagram
          }
        }
      }
    }
  `)

  return (
    <section id="team" className="section-spacer team-section">
      <Container>
        <header className="text-center section-header">
          <h2 className="section-title">Meet The UF DSC Team</h2>
          <p className="section-subtitle">
            Passionate students and faculty staff driving the success of the
            program.
          </p>
        </header>
        <Container>
          <Row>
            {teams.map((team, i) => (
              <Team {...team} key={i} />
            ))}
          </Row>
        </Container>
      </Container>
    </section>
  )
}

export default Teams
