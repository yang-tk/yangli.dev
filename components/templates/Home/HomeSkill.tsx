import styled from 'styled-components'
import { Image } from 'components/atoms/Image'
import { Typography } from 'components/atoms/Typography'
import { Paper } from 'components/atoms/Paper'
import { SectionHeader } from 'components/molecules/SectionHeader'
import skillData from 'data/skill.json'

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const skillList = skillData.map((elem) => (
  <Paper key={elem.title}>
    <Image src={elem.imgUrl} alt={elem.alt} width="70px" height="70px" />
    <Typography variant="h6">{elem.title}</Typography>
    <Typography variant="body" align="center" margin={false}>
      {elem.subtitle}
    </Typography>
  </Paper>
))

export const HomeSkill: React.FC = () => {
  return (
    <>
      <SectionHeader title="Skills" subtitle="Always Learning." />
      <StyledWrapper>{skillList}</StyledWrapper>
    </>
  )
}
