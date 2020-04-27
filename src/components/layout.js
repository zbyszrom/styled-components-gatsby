import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Navbar from "./navbar"
import Footer from "./footer"
import "../styles/layout.css"

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  margin-top: ${p => (p.open ? "160px" : "80px")};
  @media (min-width: 800px) {
    margin: 80px auto 0 auto;
  }
`

const Layout = ({ children }) => {
  const [isOpen, setMenu] = useState(false)

  return (
    <div>
      <Navbar isOpen={isOpen} setMenu={setMenu} />
      <Main open={isOpen}>
        {children}
        <Footer />
      </Main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
