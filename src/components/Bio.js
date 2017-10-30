import React, { Component } from 'react'
import styled from 'styled-components'
import { navigateTo } from 'gatsby-link'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

const Div = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2.5)}
`

const Img = styled.img`
  border-radius: 50%;
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  width: ${rhythm(2)};
  height: ${rhythm(2)};
  cursor: pointer
`

class Bio extends Component {
  render() {
    return (
      <Div>
        <Img
          src={profilePic}
          alt={`Jay Park`}
          onClick={() => navigateTo('/about')}
        />
        <p>
          Written by <strong>Jay Park</strong> who lives in Toronto building SPA and loves React, Redux, GraphQL, Redux-Saga, and Node.
        </p>
      </Div>
    )
  }
}

export default Bio
