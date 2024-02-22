import React from 'react'
import styled from 'styled-components'

import { StyledMenu } from './Menu.styled'
import { Transition } from 'react-transition-group'
import CommonLinks from '../CommonLinks'

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Menu = ({ open, setOpen }) => {
  return (
    <Transition in={open}>
      {(state) => (
        <StyledMenu state={state} onClick={() => setOpen(!open)}>
          <Links>
            <CommonLinks />
          </Links>
        </StyledMenu>
      )}
    </Transition>
  )
}
export default Menu
