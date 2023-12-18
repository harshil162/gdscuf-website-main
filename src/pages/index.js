import React from 'React'
import Layout from '../components/Layout'
import Header from '../components/index/Header'
import Overviews from '../components/index/Overviews'
import Opportunities from '../components/index/Opportunities'
import Technologies from '../components/index/Technologies'
import Teams from '../components/index/Teams'
import Faqs from '../components/index/Faqs'
import Workshops from '../components/index/Workshops'
import SolutionChallenge from '../components/index/SolutionChallenge'

const Index = () => (
  <Layout>
    <Header />
    <Overviews />
    <Opportunities />
    <Technologies />
    <SolutionChallenge />
    <Workshops />
    <Teams />
    <Faqs />
  </Layout>
)

export default Index
