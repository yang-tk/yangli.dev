import React from 'react'
import { Image } from 'components/atoms/Image'
import styled, { css, keyframes } from 'styled-components'

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg) scale(1.12);
  }
  50% {
    transform: rotate(180deg) scale(1.15);
  }
  100% {
    transform: rotate(0deg) scale(1.12);
  }
`

const Wrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  transform: translateX(-45px);

  ${(props) => props.theme.media.tablet} {
    transform: translateX(0);
    width: 250px;
    order: -1;
    img {
      width: 250px;
    }
  }

  ${(props) => props.theme.media.mobile} {
    width: 200px;
    height: 250px;
    img {
      width: 200px;
    }
  }
`

const override = css`
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid ${(props) => props.theme.color.primary};
  transform: rotate(-360deg);
  animation: ${rotateAnimation} 4s infinite;
`

export const RotateAvater: React.FC = () => {
  return (
    <Wrapper>
      <Image
        src="static/images/avatar.jpg"
        alt="avatar"
        width="300px"
        height="auto"
        variant="circle"
      />
      <Image
        src="static/images/avatar-outline.png"
        alt="avatar"
        width="300px"
        height="auto"
        variant="circle"
        css={override}
      />
    </Wrapper>
  )
}