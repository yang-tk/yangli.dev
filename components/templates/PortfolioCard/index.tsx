import { Button } from 'components/atoms/Button'
import { Link } from 'components/atoms/Link'
import { Typography } from 'components/atoms/Typography'
import { Card } from 'components/organisms/Card'
import { ChipList } from 'components/organisms/ChipList'
import React from 'react'
import { css } from 'styled-components'
import { IIconText } from 'types/schema/Profile'
import { IImage } from 'types/shared/Image'

const readMoreBtnStyle = css`
  position: absolute;
  bottom: 25px;
  width: calc(100% - 50px);

  ${(props) => props.theme.media.desktop_sm} {
    width: 100%;
    position: initial;
  }
`

interface IPortfolioCard {
  banner: IImage
  title: string
  description: string
  info: Array<IIconText>
  tags: Array<string>
  pathTo: string
  curIndex: number
}

export const PortfolioCard: React.FC<IPortfolioCard> = (props) => {
  const { banner, title, description, info, tags, pathTo, curIndex } = props

  return (
    <Card
      media={banner}
      variant="flex"
      float={curIndex % 2 === 0 ? 'left' : 'right'}
      height="350px"
      css={css`
        margin-bottom: 25px;
      `}
    >
      <Typography variant="h6" margin={false}>
        {title}
      </Typography>
      <ChipList variant="default" size="small" items={info} />
      <Typography variant="body" margin={false}>
        {description.slice(0, 100)}...
      </Typography>
      <ChipList variant="outlined" size="small" items={tags} />

      <Link href={pathTo}>
        <Button variant="contained" fullWidth css={readMoreBtnStyle}>
          Read More
        </Button>
      </Link>
    </Card>
  )
}
