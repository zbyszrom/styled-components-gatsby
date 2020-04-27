import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaAlignRight, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"

const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
  margin: auto 0 auto auto;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 800px) {
    display: none;
  }
`

const SFaAlignRight = styled(FaAlignRight)`
  color: var(--primary);
  font-size: 1.5rem;
`
const Nav = styled.nav`
  display: ${p => (p.open ? "block" : "none")};
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  border-bottom: 4px solid var(--secondary);

  @media (min-width: 800px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    border-bottom: none;
    position: relative;
    width: initial;
    margin: auto 0 auto auto;
  }
  a {
    padding: 4px 8px;
    display: block;
    text-align: center;
    margin: auto 0;
    color: var(--primary);
    font-weight: bold;
  }
`

const Navbar = ({ isOpen, setMenu, children }) => {
  const toggleMenu = () => {
    setMenu(isOpen => !isOpen)
  }
  return (
    <header>
      {children}

      <Button type="button" onClick={toggleMenu}>
        <SFaAlignRight />
      </Button>
      <Nav open={isOpen}>
        <Link to="/">Home</Link>
        <Link to="/page-2">Second Page</Link>
        <Link to="/contact">Contact</Link>
      </Nav>
    </header>
  )
}
export default Navbar
