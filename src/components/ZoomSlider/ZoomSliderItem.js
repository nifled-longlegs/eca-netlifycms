import React from "react";
import { Col, Row } from 'reactstrap';
import { CSSTransitionGroup } from 'react-transition-group';

import SliderItemStyles from './styles/SliderItemStyles';
import RodalStyles from './styles/RodalStyles';
import { ZoomButton } from './ZoomSliderControls';


class ZoomSliderItem  extends React.Component {
  state = {
    modalVisible: false
  }

  show = () => {
    this.setState({ modalVisible: true });
  }

  hide = () => {
      this.setState({ modalVisible: false });
  }

  render() {
    return (
      <React.Fragment>
        <SliderItemStyles modalActive={this.state.modalVisible}>
          <img className="modal__preview" src={this.props.img} alt="slider item" />
 
          <ZoomButton onClick={this.show} small={this.props.smallTitle} big={this.props.bigTitle} />

          <RodalStyles 
            visible={this.state.modalVisible} 
            onClose={this.hide} 
            duration={500}
          >
            <div className="modal__content">
              <Row>
                <Col xs={12} md={5}>
                  <CSSTransitionGroup
                    transitionName={{
                      appear: 'animated',
                      appearActive: 'slideInLeft',
                    }}
                    transitionAppear
                    transitionEnter
                    transitionLeave
                    style={{ width: '100%' }}
                  >
                    <div className="modal__img">
                      <img src={this.props.img} alt="slider item" />
                    </div>
                  </CSSTransitionGroup>        
                </Col>        
                <Col xs={12} md={7}>
                  <CSSTransitionGroup
                      transitionName={{
                        appear: 'animated',
                        appearActive: 'fadeInUpBig',
                      }}
                      transitionAppear
                      transitionEnter
                      transitionLeave={false}
                      style={{ width: '100%' }}
                    >
                      <div className="modal__text">
                        <p className="model__text-title">
                          {this.props.head}
                        </p>
                        <p className="model__text-sub">
                          {this.props.subHead}
                        </p>

                        {
                          this.props.paragraphs.map(p => (
                              <p>{ p }</p>
                            ))
                        }
                      </div>
                    </CSSTransitionGroup>
                </Col>
              </Row>
            </div>
          </RodalStyles>
        </SliderItemStyles>
      </React.Fragment>
    )
  }
}

export default ZoomSliderItem
