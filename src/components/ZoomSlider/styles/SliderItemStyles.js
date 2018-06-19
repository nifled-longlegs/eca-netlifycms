import styled from 'styled-components';

import * as vars from '../../../styledVars';


const SliderStyles = styled.div`
  position: relative;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;

  ${({ modalActive }) => modalActive && `
    min-height: 85vh !important;
  `}

  transition: ease-in-out min-height 1s;
  
  .rodal {
    position: absolute;

    .rodal-dialog {
      padding: 0;
    }
  }

  .modal__preview {
    height: 300px;
    width: auto;
  }

  .modal__content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .row {
      height: 100%;
    }

    .modal__img {
      height: 100%;
      background: rgba(0,0,0,0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      
      img {
        width: 80%;
        margin: 0 auto;
      }
    }

    .modal__text {
      font-family: "SpartanMB Regular";
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 3rem;
      text-align: justify;

      @media (min-width: 768px) {
        width: 80%;
        margin: 0 auto;
      }

      .model__text-title {
        margin: 0;
        color: ${vars.blueAlt};
        font-family: "SpartanMB Bold";
        font-size: 1.5rem;
        font-weight: bold;
        text-align: none;
      }

      .model__text-sub {
        color: ${vars.blue};
        font-size: 1rem;
        font-weight: bold;
        text-align: none;
      }
    }
  }
`

export default SliderStyles
