import { Link } from "gatsby"
import React from "react"

const linkStyles = {
  textDecoration: 'none', 
  color: 'black',
}

const activeStyles = {
  color: 'grey',
}

const ListLink = props => (
  <li style={{display: `inline-block`, marginRight: `1rem`}}>
    <Link 
      to={props.to} 
      style={linkStyles}
      activeStyle={activeStyles}
      getProps={({isPartiallyCurrent}) =>
        isPartiallyCurrent ? { style: {...linkStyles, ...activeStyles} } : null
      }
    >
      {props.children}
    </Link>
  </li>
)

const HomeLink = props => (
  <li style={{display: `inline-block`, marginRight: `1rem`}}>
    <Link 
      to={props.to} 
      style={linkStyles}
      activeStyle={activeStyles}
    >
      {props.children}
    </Link>
  </li>
)

const Header = () => (
  <header style={{ 
    margin: '3rem auto',
    marginBottom: `1.5rem`,
    maxwidth: '960',
    padding: '0 2rem'
    }}>
        <Link to="/" style={linkStyles}>
          <h1 style={{ display: `inline` }}>Code For Community</h1>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <HomeLink to="/">Home</HomeLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/projects/">Projects</ListLink>
        </ul>
      </header>

)

export default Header
