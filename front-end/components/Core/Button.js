import { Button as DefaultButton } from 'antd'
import styled from 'styled-components'
import fonts from '../../config/fonts'
import colors from '../../config/colors'

const ButtonPrimary = styled(DefaultButton)`
  font-size: ${fonts.paragraph};
  background-color: ${colors.blackcurrant};
  color: #fff;
  &:hover{
    background-color: ${colors.blackcurrant};
    color: #fff;
  }
`

export const ButtonIndex = styled(DefaultButton)`
  font-size: ${fonts.paragraph};
  background-color:#C05A59;
  color: ${colors.color1};
  border: 0px;
  font-family : 'Kanit' ;
  width: 80%;
  &:hover{
    background-color: ${colors.color2};
    color: ${colors.color3}
  }
`

export const ButtonVote = styled(DefaultButton)`
  font-size: ${fonts.paragraph};
  background-color: ${colors.color1};
  color: #fff;
  border-radius: 70%;
  height: 15vh;
  width: 15vh;
  margin-top : 10%;
  border : 10px solid;
  cursor : pointer;
`

export const FacebookButton = styled(DefaultButton)`
  font-size: ${fonts.paragraph};
  font-family: 'Kanit', sans-serif;
  background-color: #24468A;
  color: ${colors.color1};
  border:0px;
`

export default ButtonPrimary