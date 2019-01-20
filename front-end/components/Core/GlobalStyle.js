import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  .ant-calendar-month-panel-selected-cell .ant-calendar-month-panel-month {
    background: 'linear-gradient(270deg, #5F597B 0%, #B2605C 100%)' !important;
    color: #fff !important;
  }
  body{
    font-family:sans-serif,'Kanit','AgencyGP', !important;
    height: 100vh;
  }

  @font-face{
    font-family: "AgencyGP";
    src: url('/static/fonts/dY_AgencyGP.ttf') format('truetype');
  }

  @font-face{
    font-family: "Kanit";
    src: url('/static/fonts/Kanit-Thin.ttf') format('truetype');
  }
`

export default GlobalStyle
