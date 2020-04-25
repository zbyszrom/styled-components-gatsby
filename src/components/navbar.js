import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    border-bottom: none;
    position: relative;
    width: initial;
  }
  a {
    padding: 4px 8px;
    display: block;
    text-align: center;
    margin: auto 0;
  }
`

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/page-2">Second Page</Link>
        <Link to="/contact">Contact</Link>
      </Nav>
    </header>
  )
}
export default Navbar
