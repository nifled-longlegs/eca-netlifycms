import React from 'react';
import PropTypes from 'prop-types'
import AnimateOnChange from 'react-animate-on-change'

import ServiceItemStyles from './styles/ServiceItemStyles'


class ServiceItem extends React.Component {
  state = {
    text: this.props.text,
    small: false
  }

  onHover = () => this.setState({ text: this.props.description, small: true })

  unHover = () => this.setState({ text: this.props.text, small: false })

  render() {
    const { small } = this.state

    return (
      <ServiceItemStyles background={ this.props.backgroundSrc } noOpacity={this.props.noOpacity}>
        <div className="circle" onMouseEnter={this.onHover} onMouseLeave={this.unHover}>
          <div className="circle__inner">
            <div className="circle__wrapper">
              <div 
                className="circle__content" 
                style={{ fontSize: `${small ? '0.85rem' : '1.2rem'}`, padding: `${small ? '0 2rem' : '0'}` }}>
                <AnimateOnChange
                  baseClassName="animated"
                  animationClassName="fadeInUp"
                  animate={this.state.text !== ''}
                >
                  { this.state.text }
                </AnimateOnChange>
              </div>
            </div>
          </div>
        </div>
      </ServiceItemStyles>
    )
  }
}

ServiceItem.defaultProps = {
  backgroundSrc: '',
  noOpacity: false
}

ServiceItem.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundSrc: PropTypes.string,
  noOpacity: PropTypes.bool
}

export default ServiceItem;
