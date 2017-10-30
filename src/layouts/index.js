import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import styled from 'styled-components'

import { rhythm, scale } from '../utils/typography'

const H1 = styled.h1`
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`

const H3 = styled.h3`
  margin-top: 0;
  margin-bottom: ${rhythm(1)};
`

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`

class Template extends Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    if (location.pathname === rootPath) {
      header = (
        <Div>
          <H1>
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              Jay's Blog
            </Link>
          </H1>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/about'}
          >
            About
          </Link>
        </Div>
      )
    } else {
      header = (
        <H3>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Jay's Blog
          </Link>
        </H3>
      )
    }
    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children()}
      </Container>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
