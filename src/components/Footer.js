import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import FooterWidget from './FooterWidget'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
  const {
    websiteYaml: { social },
    allFooterYaml: { nodes: widgets },
  } = useStaticQuery(graphql`
    {
      allFooterYaml {
        nodes {
          header
          links {
            link
            name
          }
        }
      }
      websiteYaml {
        social {
          youtube
          github
          instagram
          discord
        }
      }
    }
  `)

  return (
    <footer className="section-spacer footer-section">
      <Container>
        <Row className="flex-column-reverse flex-sm-row flex-lg-row">
          <Col xs={12} md={4}>
            <div className="footer-widget first-of-footer-widget">
              <div style={{width: 180, height: 50}}>
                <img src="https://drive.google.com/uc?export=view&id=1PeyiXsNg1VflnBdRLpgebD_6_gogi_19" alt="dsc logo" width="100%" height="85%"></img>
              </div>
              
              <p>&copy; {new Date().getFullYear()} | All Rights Reserved.</p>
              
              <ul className="social-list__inline mt-10">
                {Object.entries(social)
                  .filter(([, link]) => link != null)
                  .map(([name, link]) => (
                    <li key={name}>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        <i className={`fab fa-${name}`}></i>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </Col>

          <Col md={8} xs={10}>
            <Row>
              {widgets.map((widget, i) => (
                <FooterWidget {...widget} key={i} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
