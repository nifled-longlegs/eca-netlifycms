import React from 'react'
import PropTypes from 'prop-types';

import PageHeaderStyles from './styles/PageHeaderStyles'


const PageHeader = (props) => (
  <PageHeaderStyles smPadding={props.smPadding} topPadding={props.topPadding}>
    <button>
      { props.text }
      <span className="border-top" />
      <span className="border-right" />
      <span className="border-bottom" />
      <span className="border-left" />
    </button>
  </PageHeaderStyles>
)

PageHeader.propTypes = {
  text: PropTypes.string.isRequired
}

export default PageHeader
