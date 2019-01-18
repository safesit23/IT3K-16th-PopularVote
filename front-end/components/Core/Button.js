import { Button as DefaultButton } from 'antd'
import styled from 'styled-components'
import fonts from '../../config/fonts'
import colors from '../../config/colors'

const ButtonPrimary = styled(DefaultButton)`
  font-size: ${fonts.paragraph};
  background-color: ${colors.color1};
  color: #fff;
  &:hover{
    background-color: ${colors.primaryDarker};
    color: #fff;
  }
`

export const ButtonSecondary = styled(DefaultButton)`
  font-size: ${fonts.paragraph};
  background-color: transparent;
  color: ${colors.primary};
  border-color: ${colors.color1};
  &:hover{
    background-color: ${colors.color2};
    color: ${colors.color3}
  }
`

export const ButtonVote = styled(DefaultButton)`
  font-size: ${fonts.paragraph};
  background-color: ${colors.color1};
  color: #fff;
  border-radius: 50%;
`

export default ButtonPrimary