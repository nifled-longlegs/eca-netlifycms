import styled from 'styled-components'
import { Container } from 'reactstrap'

import * as vars from '../../../styledVars'


const HeaderStyles = styled(Container)`
  justify-content: center;

  .navbar {
    flex-direction: column;

    @media (max-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .nav-item {
    .header-link {
      display: block;
      margin: 0 1rem;
      padding: 0.4rem 0;
      color: ${vars.blue};
      font-family: 'SpartanMB Bold';
      font-size: 0.9rem;
      letter-spacing: 0.1rem;
      text-decoration: none !important;
      text-transform: uppercase;

      @media (max-width: 768px) {
        text-align: center;
        padding: 0.75rem 0;
      }

      &.active:after {
        // box-shadow: 0px 3px 0px 0px ${vars.darkBlue};
        width: 100%;
      }

      :after {
        content: '';
        display: block;
        margin: 5px 0;
        width: 0;
        height: 3px;
        background: ${vars.darkBlue};
        transition: width .3s;
      }

      :hover:after {
        width: 100%;
        //transition: width .3s;
      }
    }
  }
`

export default HeaderStyles
