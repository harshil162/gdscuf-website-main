import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import BsNav from 'react-bootstrap/Nav'

const Nav = ({ register }) => {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const cb = _ => {
      setSticky(window.scrollY > 100)
    }
    window.addEventListener('scroll', cb, { passive: true })
    return () => {
      window.removeEventListener('scroll', cb)
    }
  }, [])

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className={
        'custom-menu custom-menu__light' + (sticky ? ' navbar-is-sticky' : '')
      }
    >
      <Container>
        <a className="navbar-brand" href="/">
          <img src='https://drive.google.com/uc?export=view&id=1PeyiXsNg1VflnBdRLpgebD_6_gogi_19' className="logo-sm" alt="dsc logo" />
        </a>
        <Navbar.Toggle
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
        >
          <span className="menu-icon__circle"></span>
          <span className="menu-icon">
            <span className="menu-icon__bar"></span>
            <span className="menu-icon__bar"></span>
            <span className="menu-icon__bar"></span>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse>
          <BsNav className="ml-lg-auto">
            <BsNav.Item>
              <BsNav.Link href="#overview">Overview</BsNav.Link>
            </BsNav.Item>
            <BsNav.Item>
              <BsNav.Link href="#technologies">Technologies</BsNav.Link>
            </BsNav.Item>
            <BsNav.Item>
              <BsNav.Link href="#solutionchallenge">Solution Challenge</BsNav.Link>
            </BsNav.Item>
            <BsNav.Item>
              <BsNav.Link href="#workshops">Workshops</BsNav.Link>
            </BsNav.Item>
            <BsNav.Item>
              <BsNav.Link href="#team">Team</BsNav.Link>
            </BsNav.Item>
            <BsNav.Item>
              <BsNav.Link href="#faqs">Faqs</BsNav.Link>
            </BsNav.Item>
          </BsNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nav
