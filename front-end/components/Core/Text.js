import styled from 'styled-components'
import config from '../../config/fonts'


export const Headline = styled.h1`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.headline};
  font-weight: bold;
  color: ${props => props.color || "black"};
`
export const IT3K = styled.h1`
  font-family: 'Kanit', sans-serif;
  font-size:${config.IT3K};
  color: #fff;
  font-weight: bold;
`
export const Subtitle = styled.h1`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.subtitle};
  color: ${props => props.color || "black"};
`

export const Paragraph = styled.h1`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.paragraph};
  color: ${props => props.color || "black"};
`

export const ParagraphBold = styled(Paragraph)`
  font-family: 'Kanit', sans-serif;
  font-weight: bold;  
  color: ${props => props.color || "black"};
`

export const Small = styled.h5`
  font-family: 'Kanit', sans-serif;
  font-size: ${config.small};
  color: ${props => props.color || "black"};
`

export default Headline
