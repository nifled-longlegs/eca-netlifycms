
import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group';
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import { FaBuilding, FaPhone } from 'react-icons/lib/fa'

import * as vars from '../styledVars'
import { customMapStyles2 } from '../utils/customMapStyles'
import Map from '../components/Footer/Map'


class ContactPage extends React.Component {
		componentWillMount() {
			document.body.style.background = "linear-gradient(90deg, rgba(0,170,232,1) 0%, rgba(91,210,255,1) 35%, rgba(255,255,255,1) 100%)";
		}
		
		componentDidMount() {
			document.querySelector('.header__brand').style["-webkit-filter"] = "brightness(0) invert(1)"
		}

	  componentWillUnmount() {
			document.body.style.background = null;
			document.querySelector('.header__brand').style["-webkit-filter"] = ''
	  }

	  render() {
    return (
      <Container style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      	<CSSTransitionGroup
          transitionName={{
            appear: 'animated',
            appearActive: 'fadeInUp'
          }}
          transitionAppear
          transitionEnter={false}
          transitionLeave={false} 
          transitionAppearTimeout={2000}
          style={{ width: '100%' }}
        >

          <div className="contact">

				    <Row className="contact__card">

				    	<Col xs={12} md={6} style={{ padding: 0 }}>
				    		<div className="contact__map" style={{ background: 'black', height: '100%' }}>
				    			
				    		<Map 
	                isMarkerShown
	                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCgkxVp25w3p4MI0C-USN39HE6FB_USycI"
	                loadingElement={<div style={{ height: `100%` }} />}
	                containerElement={<div style={{ height: `100%` }} />}
	                mapElement={<div style={{ height: `100%` }} />}
	                customStyle={customMapStyles2}
	              />

				    		</div>
				    	</Col>


				    	<Col xs={12} md={6} style={{ padding: '2rem 1.5rem' }}>
				    		<div className="contact__info">
				    			<h1>Contáctanos</h1>

				    			<Row>
				    				<Col xs={12} md={6}>
				    						<div style={{ display: 'flex' }}>
				    							<div><FaBuilding size={16} color={vars.blue} /></div>
				    							<div style={{ marginLeft: '3px' }}>Av. Nayarit 231 esq. Ramón Corral Hermosillo, Sonora</div>
				    						</div>
				    				</Col>

				    				<Col xs={12} md={6} style={{ display: 'flex', flexDirection: 'column' }}>
				    					<div style={{ display: 'flex' }}>
			    							<div><FaPhone size={16} color={vars.blue} /></div>
			    							<div style={{ marginLeft: '3px' }}>662 215 7222</div>
			    						</div>

			    						{/* <div style={{ display: 'flex' }}>
			    							<div><FaEnvelope size={16} color={vars.blue} /></div>
			    							<div style={{ marginLeft: '3px' }}>example@email.com</div>
			    						</div> */}
				    				</Col>
				    			</Row>

				    			<div className="contact__form">
				    				<Form>
							        <FormGroup row>
							          <Col sm={12}>
													<Input type="email" name="email" id="exampleEmail" placeholder="Nombre" />
							          </Col>
							        </FormGroup>
							        <FormGroup row>
							          <Col sm={12}>
							            <Input type="password" name="password" id="examplePassword" placeholder="Email" />
							          </Col>
							        </FormGroup>
							        <FormGroup row>
							          <Col sm={12}>
							            <Input type="textarea" name="text" id="exampleText" placeholder="Mensaje" />
							          </Col>
							        </FormGroup>
							        <FormGroup check row>
						            <Button>Submit</Button>
							        </FormGroup>
							      </Form>
				    			</div>
				    		</div>
				    	</Col>

				    </Row>

				  </div>
        </CSSTransitionGroup>

      </Container>
    )
  }
}

export default ContactPage
