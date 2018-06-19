import React        from 'react'
import { FaAngleLeft, FaAngleRight, FaSearch } from 'react-icons/lib/fa'

import * as vars from '../../styledVars';


export const PrevButton = (props) => (
  <button onClick={props.onClick} className="slick-arrow slick-prev" type="button">
    <FaAngleLeft size={75} color={vars.blueAlt} />
  </button>
)

export const NextButton = (props) => (
  <button onClick={props.onClick} className="slick-arrow slick-next" type="button">
    <FaAngleRight size={75} color={vars.blueAlt} />
  </button>
)

export const ZoomButton = (props) => (
    <div className="zoom-slider__control">
      <p style={{ fontFamily: 'SpartanMB Light', margin: 0, opacity: 0.8, textTransform: "uppercase", textAlign: 'center' }}>
        {props.big}
      </p>
      <p style={{ fontFamily: 'SpartanMB Light', marginBottom: '0.5rem', fontSize: '1.5rem', textTransform: "uppercase", textAlign: 'center', textDecoration: `underline ${vars.blueAlt}` }}>
        {props.small}
      </p>
      <button onClick={props.onClick} className="zoom-slider__button" type="button">
        <FaSearch size={40} color={vars.blueAlt} />
      </button>
    </div>
  )
