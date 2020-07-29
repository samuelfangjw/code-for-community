import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`

const LimitWidth = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

LimitWidth.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LimitWidth
