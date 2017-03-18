import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  margin: 40px;
  border: 5px outset pink;

  &:hover {
   background-color: black;
 }
`

const P = styled.p`
  font-size: 15px;
  color: pink;
`

const OutsetBox = () => {
    return (
      <Div >
        <P>Get started with styled-components</P>
      </Div>
    )
}

export default OutsetBox
