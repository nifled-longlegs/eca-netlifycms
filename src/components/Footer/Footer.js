import React from 'react'
import { Button, Container, Col, Form, FormGroup, Input, Row} from 'reactstrap'
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/lib/fa'

import FooterStyles from './styles/FooterStyles'
import Map from './Map';

/* eslint-disable */
class Footer extends React.Component {

  render() {
    return (
      <FooterStyles>
        <Container>
          <Row>
            <Col className="footer-section" xs={12} md={4}>
              <div className="footer-section__title">
                <h4>Sucursal</h4>
              </div>
              <Map 
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCgkxVp25w3p4MI0C-USN39HE6FB_USycI"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `300px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </Col>

            <Col className="footer-section" xs={12} md={4}>
              <div className="footer-section__title">
                <h4>Cotiza con Nosotros</h4>
              </div>
              <div className="footer-section__text">
                <p>si tienes dudas o quieres cotizar, escríbenos a</p>
                <p>correoinfo@comercialeca.com</p>
              </div>
            </Col>

            <Col className="footer-section" xs={12} md={4}>
              <div className="footer-section__title">
                <h4>Síguenos en</h4>
              </div>
              
              <div className="footer-social">
                <a href="https://www.facebook.com/Comercial-ECA-228237771035198/?rf=1198475553503426" target="_blank" style={{ color: "white" }}>
                  <FaFacebookSquare size={32} />
                </a>
                <a href="https://www.facebook.com/Comercial-ECA-228237771035198/?rf=1198475553503426" target="_blank" style={{ color: "white" }}>
                  <FaInstagram size={32} />
                </a>
                <a href="https://www.facebook.com/Comercial-ECA-228237771035198/?rf=1198475553503426" target="_blank" style={{ color: "white" }}>
                  <FaWhatsapp size={32} />
                </a>
              </div>

              <div className="footer-section__form">
                <Form>
                  <FormGroup>
                    <Input type="email" name="email" id="email" placeholder="correo electrónico" />
                  </FormGroup>
                  <Button>Enviar</Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </FooterStyles>
    )
  }
}

export default Footer
