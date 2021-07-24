import React from 'react'
import styled, { css } from 'styled-components'
import {
  IThemeProps,
  IDefaultProps,
  IProps
} from 'components/atoms/Layout/Flex/Flex.type'

const FlexContainer = styled.div<Partial<IThemeProps>>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};

  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}

  ${(props) =>
    props.width &&
    css`
      height: ${props.width};
    `}

  ${(props) => props.shadow && props.theme.shadow.normal}
`

export const Flex: React.FC<IProps> = (props) => {
  const { children, ...themeProps } = props

  return <FlexContainer {...themeProps}>{children}</FlexContainer>
}

const defaultProps: Omit<IDefaultProps, 'width' | 'height'> = {
  justify: 'flex-start',
  align: 'center',
  shadow: false
}

Flex.defaultProps = defaultProps