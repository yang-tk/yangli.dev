import { Icon } from 'components/atoms/Icon'
import { IVideoProps, Video } from 'components/molecules/Video'
import { FONTAWESOME_ICONS } from 'libs/constants/icons'
import React from 'react'
import styled from 'styled-components'

const Control = styled.div`
  height: auto;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    margin: 0 20px;
  }
  box-shadow: 0 0 8px ${(props) => props.theme.color.shadow};
`

export interface IVideoPlayerProps {
  videoProps: IVideoProps
}

export const VideoPlayer = React.forwardRef<
  HTMLVideoElement,
  IVideoPlayerProps
>((props, ref) => {
  const { videoProps } = props
  return (
    <>
      <Video {...videoProps} ref={ref} />
      <Control>
        <div>
          <Icon iconName="fas fa-thumbs-up" size="xs" />
          <Icon iconName="fas fa-share-alt" size="xs" />
          <Icon iconName={FONTAWESOME_ICONS.download} size="xs" />
        </div>
        <div>
          <Icon iconName="fas fa-desktop" size="xs" />
          <Icon iconName="fas fa-lightbulb" size="xs" />
        </div>
      </Control>
    </>
  )
})