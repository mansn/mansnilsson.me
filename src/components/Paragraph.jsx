import React from 'react'
import styled from 'styled-components'

const Paragraph = ({className, children}) => {
  return (
    <p className={className}>
    {children}
    </p>
  )
}

const StyledParagraph = styled(Paragraph)`
  grid-column: 2
`

export default StyledParagraph