import React from 'react'
import styled from 'styled-components'
import { VscLoading } from 'react-icons/vsc'

type SpinnerProps = {
  fullscreen?: boolean
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`

export const Spinner: React.FC<SpinnerProps> = ({ fullscreen = false }) => {
  if (fullscreen) {
    return (
      <Wrapper>
        <VscLoading />
      </Wrapper>
    )
  }

  return <VscLoading />
}
