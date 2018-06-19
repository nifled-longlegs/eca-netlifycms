import React from "react";
import Slider from 'react-slick'

import { PrevButton, NextButton } from './ZoomSliderControls'
import ZoomSliderItem from './ZoomSliderItem'
import SliderStyles from './styles/SliderStyles'
import sliderData from '../../utils/data/sliderData'


const ZoomSlider = () => {
  const settings = {
    infinite: true,
    autoplay: false,
    // autoplaySpeed: 5000,
    speed: 600,
    useCSS: true,
    cssEase: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />
  }

  return (
    <SliderStyles>
      <Slider {...settings}>

        {
          sliderData.map(item => {
            return (
              <ZoomSliderItem 
                bigTitle={item.bigTitle}
                smallTitle={item.smallTitle}
                head={item.head}
                subHead={item.subHead}
                img={item.icon} 
                paragraphs={item.paragraphs}
              />
            )
          })
        }
      </Slider>
    </SliderStyles>
  )
}

export default ZoomSlider
