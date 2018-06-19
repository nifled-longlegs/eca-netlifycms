import React from 'react';
import PropTypes from 'prop-types'

import ClientItemStyles from './styles/ClientItemStyles'


const ClientItem = (props) => (
  <ClientItemStyles background={ props.backgroundSrc }>
    <div className="circle">
      <div className="circle__inner">
        <div className="circle__wrapper">
          <div className="circle__content">
            { props.text }
          </div>
        </div>
      </div>
    </div>
  </ClientItemStyles>
)

ClientItem.defaultProps = {
  text: '',
  backgroundSrc: ''
}

ClientItem.propTypes = {
  text: PropTypes.string,
  backgroundSrc: PropTypes.string
}

export default ClientItem;
