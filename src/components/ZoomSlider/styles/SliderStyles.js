import styled from 'styled-components';


const SliderStyles = styled.div`
  
  img {
    width: 100%;
  }
  
  .slick-arrow {
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    height: 100%;
    cursor: pointer;
    
    @media (max-width: 768px) {
      padding: 0;
    }

    ::before {
      display: none;
    }
    
    :focus {
      outline: 0;
    }
    
    &.slick-next {
      right: 0;
      height: 33%;
    }
    &.slick-prev {
      left: 0;
    }
  }

  .zoom-slider__control {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    
    .zoom-slider__button {
      background: transparent;
      border: none;
      cursor: pointer;

      :focus {
        outline: none;
      }
    }
  }
`

export default SliderStyles
