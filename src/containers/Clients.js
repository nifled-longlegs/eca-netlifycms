import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { CSSTransitionGroup } from 'react-transition-group';

import PageHeader from '../components/PageHeader/PageHeader';
import ClientItem from '../components/ClientItem/ClientItem';
import clientsData from '../utils/data/clientsData'


class ClientsPage extends React.Component {
  state = {
    selectedClient: clientsData[0]
  }

  show = (id) => this.setState({ selectedClient: clientsData.find(x => x.id === id) })

  render() {
    const { selectedClient } = this.state

    return (
      <Container style={{ marginTop: '5rem', marginBottom: '5rem' }}>
 
        <Row>
          <Col xs={12} md={4}>
            <CSSTransitionGroup
              transitionName={{
                appear: 'animated',
                appearActive: 'slideInLeft'
              }}
              transitionAppear
              transitionEnter={false}
              transitionLeave={false} 
              transitionAppearTimeout={1500}
            >
              <Row>
                { clientsData.map(x => 
                  // <Col xs={6} md={6} key={x.id} onClick={() => this.show(x.id)} style={{ marginBottom: '-2rem' }}>
                  <Col xs={6} md={6} key={x.id} style={{ marginBottom: '-2rem' }}>
                    <ClientItem backgroundSrc={x.imgSrc} />
                  </Col>
                )}
              </Row>
            </CSSTransitionGroup>
          </Col>


          <Col xs={12} md={8}>
            <PageHeader text="Clientes Satisfechos" />
            <CSSTransitionGroup
              transitionName={{
                appear: 'animated',
                appearActive: 'fadeInUp',
                enter: 'animated',
                enterActive: 'fadeIn',
                leave: 'animated',
                leaveActive: 'fadeOutRight'
              }}
              transitionAppear
              transitionEnter
              transitionLeave
              transitionAppearTimeout={1500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              <div key={selectedClient.id} className="clients-description" style={{ position: 'relative' }}>
                <p>{selectedClient.description}</p>
              </div>
            </CSSTransitionGroup>
          </Col>
        </Row>

      </Container>
    )
  }
}
 
export default ClientsPage
