import styled from 'styled-components';

import * as vars from '../../../styledVars';


const PageHeaderStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${props => props.smPadding ? '1.5rem 0' : '5rem 0'};
  margin-top: ${props => props.topPadding ? '3rem' : ''};

  button {
    position: relative;
    padding: 1rem;
    background: none;
    border: none;
    animation: text-color 1s forwards;

    font-family: 'SpartanMB Regular';
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.5rem;

    :focus { outline: 0; }
  }

  .border-top, .border-right, .border-bottom, .border-left { background-color: ${vars.blue}; }

  .border-top {
    height: 1px;
    width: 0;
    border-top-width: 0 !important;
    animation: top 0.4s linear forwards;
    position: absolute;
    top: 0;
    left: 0;
  }

  .border-right {
    height: 0;
    width: 1px;
    border-right-width: 0 !important;
    right: 0;
    top: 0;
    position: absolute;
    animation: right 0.25s linear forwards;
    animation-delay: 0.4s;
  }

  .border-bottom {
    height: 1px;
    width: 0;
    border-bottom-width: 0 !important;
    right: 0;
    bottom: 0;
    position: absolute;
    animation: bottom 0.3s linear forwards;
    animation-delay: 0.65s;
  }

  .border-left {
    height: 0;
    width: 1px;
    border-left-width: 0 !important;
    bottom: 0;
    left: 0;
    position: absolute;
    animation: left 0.15s linear forwards;
    animation-delay: 0.95s;
  }

  @keyframes top {
    0% {
      width: 0
    }

    100% {
      width: 100%
    }
  }

  @keyframes right {
    0% {
      height: 0%
    }
    
    100% {
      height: 100%
    }
  }

  @keyframes bottom {
    0% {
      width: 0
    }
    
    100% {
      width: 100%
    }
  }

  @keyframes left {
    0% {
      height: 0%
    }
    
    100% {
      height: 100%
    }
  }

  @keyframes text-color {
    0% { color: inherit; }
    100%{ color: ${vars.blue}; }
  }
`

export default PageHeaderStyles
