import styled from 'styled-components'

import * as vars from '../../../styledVars';


const ServiceItemStyles = styled.div`
  cursor: pointer;

  .circle {
    position: relative;
    display: block;
    margin: 2em 0;
    background-color: transparent;
    color: #222;
    text-align: center;

    transition: cubic-bezier(0.32,-0.24, 0.6, 1.79) 0.233s;
  }

  .circle:after {
    display: block;
    padding-bottom: 100%;
    width: 100%;
    height: 0;
    border-radius: 50%;
    background: ${props => props.background 
      ? `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${props.background}) no-repeat center center` 
      : vars.blueOpaque};
    background-size: 150%;
    content: "";
    transition: ease-in-out 0.233s;
  }

  .circle:hover {
    transform: scale(1.15);
  }

  .circle:hover:after {
    /* background: ${props => props.background ? `url(${props.background})` : vars.blueOpaque}; */
    background-size: 115%;
  }

  .circle__inner {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .circle__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle__content {
    padding: 1rem;
    color: white;
    font-family: "SpartanMB Regular";
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    .circle__content {
      font-size: 2rem;
    }
  }
`

export default ServiceItemStyles
