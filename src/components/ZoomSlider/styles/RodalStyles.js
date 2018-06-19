import styled from 'styled-components';
import Rodal from 'rodal';


const SliderStyles = styled(Rodal)`
  position: absolute;

  .rodal-dialog {
    width: 100% !important;
    height: 100% !important;
    background: linear-gradient(90deg, rgba(0,170,232,1) 0%, rgba(91,210,255,1) 35%, rgba(255,255,255,1) 100%);
  }

  .modal__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slideInLeft {
    animation-delay: 0.33s;
  }

  .fadeInUpBig {
    animation-delay: 0.33s;
  }
`

export default SliderStyles
