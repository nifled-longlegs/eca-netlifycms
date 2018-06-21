import React from 'react'
import { withSiteData } from 'react-static'
import { Container } from 'reactstrap';
import Plx from 'react-plx';
import ScrollAnimation from 'react-animate-on-scroll';

import PageHeader from '../components/PageHeader/PageHeader';
import * as about from '../utils/data/about';
import { parallaxData } from '../utils/parallaxData';
import BadgeImg from '../assets/img/sello.png';
import BlurredImg from '../assets/img/blured.png';
import ZoomSlider from '../components/ZoomSlider/ZoomSlider'


export default withSiteData(() => (
  <React.Fragment>
    <Container>
      <PageHeader smPadding text="Calidad ECA" />
    </Container>

    <Container fluid style={{ padding: 0 }}>
      <ZoomSlider />
    </Container>

    <Container className="home-container">
      <Plx className='parallax-left' parallaxData={parallaxData.left}>
        <img src={BlurredImg} alt="Sello ECA"/>
      </Plx>

      <Plx className='parallax-right' parallaxData={parallaxData.right}>
        <img src={BadgeImg} alt="Sello ECA"/>
      </Plx>

      <ScrollAnimation animateIn="bounceInLeft" animateOnce>
        <PageHeader text="Misión" />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <div className="mission--vision">
          <p className="mission--vision__title">
            Hacia nuestros
            <span>
              <ScrollAnimation animateIn="jackInTheBox" delay={300}>
                Clientes
              </ScrollAnimation>
            </span>
          </p>
          <p>{ about.mission.clients }</p>

          <p className="mission--vision__title">
            Hacia nuestros
            <span>
              <ScrollAnimation animateIn="jackInTheBox" delay={100}>
                Colaboradores
              </ScrollAnimation>
            </span>
          </p>
          <p>{ about.mission.collaborators }</p>

          <Plx className='parallax-left' parallaxData={parallaxData.leftAltAlt}>
            <img src={BlurredImg} alt="Sello ECA"/>
          </Plx>

          <p className="mission--vision__title">
            Hacia nuestros
            <span>
              <ScrollAnimation animateIn="jackInTheBox" delay={100}>
                Accionistas
              </ScrollAnimation>
            </span>
          </p>
          <p>{ about.mission.actionists }</p>

          <p className="mission--vision__title">
            Hacia la
            <span>
              <ScrollAnimation animateIn="jackInTheBox" delay={100}>
                Sociedad
              </ScrollAnimation>
            </span>
          </p>
          <p>{ about.mission.society }</p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="bounceInRight" animateOnce>
        <PageHeader text="Visión" />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <div className="mission--vision">
          <p>{ about.vision }</p>
        </div>
      </ScrollAnimation>

    </Container>
  </React.Fragment>
))
