import styled from 'styled-components'
import config from '../../config/fonts'


export const Headline = styled.h1`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.headline};
  font-weight: bold;
  color: ${props => props.color || "black"};
`

export const HeadlineWh = styled.h1`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.headline};
  font-weight: bold;
  color: ${props => props.color || "white"};
`

export const WebWh = styled.h1`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.web};
  font-weight: bold;
  color: ${props => props.color || "white"};
`

export const IT3K = styled.h1`
  font-family: 'AgencyGP', sans-serif;
  font-size:${config.IT3K};
  color: #fff;
  font-weight: bold;
  text-shadow: 4px 4px 1px rgba(0, 0, 0, 0.5);
`

export const Title = styled.h4`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.title};
  color: ${props => props.color || "black"};
`

export const TitleBl = styled.h4`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.title};
  color: ${props => props.color || "black"};
`

export const TitleWh = styled.h4`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.title};
  color: ${props => props.color || "white"};
`

export const NumberWh = styled.h4`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.number};
  color: ${props => props.color || "white"};
`

export const Subtitle = styled.p`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.subtitle};
  color: ${props => props.color || "black"};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const SubtitleWh = styled.p`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.subtitle};
  color: ${props => props.color || "white"};
`

export const Paragraph = styled.p`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.paragraph};
  color: ${props => props.color || "black"};
`

export const ParagraphWh = styled.p`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.paragraph};
  color: ${props => props.color || "white"};
`

export const BodyBold = styled.p`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.body};
  font-weight: bold; 
  color: ${props => props.color || "black"};
`

export const Body = styled.p`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.body};
  color: ${props => props.color || "black"};
`

export const Confirm = styled.p`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.body};
`

export const BodyWhite = styled.p`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.body};
  color: ${props => props.color || "white"};
`

export const ParagraphBold = styled(Paragraph)`
  font-family: 'Kanit', sans-serif;
  font-weight: bold;  
  color: ${props => props.color || "white"};
  font-size : ${config.headline};
`

export const Timeout = styled.h1`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.timeout};
  color: ${props => props.color || "black"};
`

export const Caption = styled.h5`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.caption};
  color: ${props => props.color || "black"};
`

export const SubCaption = styled.h5`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.subcaption};
  color: ${props => props.color || "black"};
`

export default Headline
