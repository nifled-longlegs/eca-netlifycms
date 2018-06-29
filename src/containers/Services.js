import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import PageHeader from '../components/PageHeader/PageHeader';
import ServiceItem from '../components/ServiceItem/ServiceItem';
import servicesData from '../utils/data/servicesData'


export default () => (
  <Container>
    <PageHeader text="Servicios" />

    <Row>
      {
        servicesData.map(s => {
          return (
            <Col xs={12} sm={6} md={3} key={s.id}>
              <ServiceItem text={s.name} description={s.description} backgroundSrc={s.background} />
            </Col>
          )
        })
      }
    </Row>
  </Container>
)
