import React from "react"
import PropTypes from "prop-types"

const Sidebar = ({ children }) => {
  return (
    <>
      <Navbar/>
        <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Sidebar
