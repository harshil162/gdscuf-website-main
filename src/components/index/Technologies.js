import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Technology from './Technology'

const Technologies = () => {
  const {
    technologiesYaml: { header, subheader, technologies },
  } = useStaticQuery(graphql`
    {
      technologiesYaml {
        header
        subheader
        technologies {
          body
          header
          link
          img
        }
      }
    }
  `)

  return (
    <>
      {technologies.map((technology, index) => (
        <Technology {...technology} even={index % 2 !== 0} key={index} index={index}>
           {index !== 0 ? null : (
            <header className="section-header text-center">
              <h2 className="section-title">{header}</h2>
              <p className="section-subtitle">{subheader}</p>
              <br />
            </header>
          )}
        </Technology>
      ))}
    </>
  )
}

export default Technologies
