import styled from 'styled-components'
import config from '../../config/fonts'


export const Headline = styled.h1`
  font-family: 'AgencyGP', sans-serif;
  font-size: ${config.headline};
  font-weight: bold;
  color: ${props => props.color || "black"};
`
export const IT3K = styled.h1`
  font-family: 'AgencyGP', sans-serif;
  font-size:${config.IT3K};
  color: #fff;
  font-weight: bold;
  text-shadow: 4px 4px 1px rgba(0, 0, 0, 0.5);
`

export const Title = styled.h4`
  font-family: 'AgencyGP', sans-serif;
  font-size: ${config.Title};
  color: ${props => props.color || "black"};
`

export const Subtitle = styled.p`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.subtitle};
  color: ${props => props.color || "black"};
`

export const Paragraph = styled.p`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.paragraph};
  color: ${props => props.color || "white"};
`

export const ParagraphBold = styled(Paragraph)`
  font-family: 'Kanit', sans-serif;
  font-weight: bold;  
  color: ${props => props.color || "white"};
`

export const Small = styled.h5`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.small};
  color: ${props => props.color || "black"};
`

export default Headline
