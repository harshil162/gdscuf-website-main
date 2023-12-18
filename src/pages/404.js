import React from 'React'
import Layout from '../components/Layout'
import Container from 'react-bootstrap/Container'
import Seo from '../components/Seo'

export default () => (
  <Layout>
    <Container>
      <Seo title="404: Not found" />
      <p>It looks like this page doesn't exist.</p>
      <p>
        Click <a href="/">here</a> to go back
      </p>
    </Container>
  </Layout>
)
