import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  .ant-calendar-month-panel-selected-cell .ant-calendar-month-panel-month {
    background: #00B2FF !important;
    color: #fff !important;
  }
  body{
    font-family:'AgencyGP','Kanit', sans-serif !important;
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
