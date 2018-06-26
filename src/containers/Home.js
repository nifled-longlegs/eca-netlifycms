
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
          <div className="mission--vision__title">
            <p>Hacia nuestros</p>
            <span>
              <ScrollAnimation animateIn="jackInTheBox" delay={300}>
                <p>Clientes</p>
              </ScrollAnimation>
            </span>
          </div>
          <p className="mission-vission__desc">{ about.mission.clients }</p>

          <div className="mission--vision__title">
            <p>Hacia nuestros</p>
            <span>
              <ScrollAnimation animateIn="jackInTheBox" delay={300}>
                <p>Colaboradores</p>
              </ScrollAnimation>
            </span>
          </div>
          <p className="mission-vission__desc">{ about.mission.collaborators }</p>

          <Plx className='parallax-left' parallaxData={parallaxData.leftAltAlt}>
            <img src={BlurredImg} alt="Sello ECA"/>
          </Plx>

          <div className="mission--vision__title">
            <p>Hacia nuestros</p>
            <span>
              <ScrollAnimation animateIn="jackInTheBox" delay={100}>
                <p>Accionistas</p>
              </ScrollAnimation>
            </span>
          </div>
          <p className="mission-vission__desc">{ about.mission.actionists }</p>

          <div className="mission--vision__title">
            <p>Hacia la</p>
            <span>
              <ScrollAnimation animateIn="jackInTheBox" delay={100}>
                <p>Sociedad</p>
              </ScrollAnimation>
            </span>
          </div>
          <p className="mission-vission__desc">{ about.mission.society }</p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="bounceInRight" animateOnce>
        <PageHeader text="Visión" />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <div className="mission--vision">
          <p className="mission-vission__desc">{ about.vision }</p>
        </div>
      </ScrollAnimation>

    </Container>
  </React.Fragment>
))
