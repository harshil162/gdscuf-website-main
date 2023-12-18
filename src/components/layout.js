import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Seo from './Seo'
import { useStaticQuery, graphql } from 'gatsby'
import './Layout.scss'

const Layout = ({ children }) => {
  const {
    websiteYaml: { title, lang, description },
  } = useStaticQuery(graphql`
    {
      websiteYaml {
        title
        description
        university
        lang
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
    <>
      <Seo {...{ title, lang, description }} />
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default Layout
