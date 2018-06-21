import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Col, Container, Row } from 'reactstrap';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/lib/fa'

import PageHeader from '../components/PageHeader/PageHeader';


export default withRouteData(({ posts }) => {
  const first = posts.shift() // get first post, modifies posts directly

  return (

    <Container>
      <PageHeader text="Novedades" />

      <hr />

      <Row>

        <Col xs={12} md={9}>
          <div className="blog">
            <div className="blog-card">
              <img className="img-fluid" src={first.data.thumbnail} alt="blog-img"/>
              <div className="blog-card__content">
                <p className="blog-card__title"><Link to={`/novedades/post/${first.data.slug}`}>{first.data.title}</Link></p>
                <div className="blog-card__extra">
                  <p className="blog-card__tag">comercial-eca</p>
                  <p className="blog-card__tag">tecnologia</p>
                  <p className="blog-card__date">15 de junio del 2018</p>
                </div>
                <p className="blog-card__desc">El proyecto llamado ‘Project Milestone’ de la compañía Van Wijnen en colaboración con la Universidad de Tecnología de Eindhoven, reducirá los costos y el daño ambiental...</p>
                
              </div>
            </div>
          </div>



          <Row>
            {posts.map(post => (
              <Col xs={12} md={4} className="d-flex align-items-stretch" key={post.data.slug}>
                <div className="blog alt">
                  <div className="blog-card">
                    <img className="img-fluid" src={post.data.thumbnail} alt="blog-img"/>
                    <div className="blog-card__content">
                      <p className="blog-card__title"><Link to={`/novedades/post/${post.data.slug}`}>{post.data.title}</Link></p>
                      <div className="blog-card__extra">
                        <p className="blog-card__tag">tecnologia</p>
                        <p className="blog-card__tag">impresora-3d</p>
                        <p className="blog-card__date">10 de junio del 2018</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}


            
          </Row>
        </Col>

        <Col xs={12} md={3}>
          <div className="blog sidebar">
            <div className="blog-card">
              <p className="sidebar-title">Síguenos en:</p>
              
              <Row>
                <Col xs={6}>
                  <a rel="noopener noreferrer" className="blog-social facebook" href="https://www.facebook.com/Comercial-ECA-228237771035198/?rf=1198475553503426" target="_blank" style={{ color: "white" }}>
                    <FaFacebook size={32} />
                  </a>
                </Col>
                <Col xs={6}>
                  <a rel="noopener noreferrer" className="blog-social instagram" href="https://www.instagram.com/comercialeca/" target="_blank" style={{ color: "white" }}>
                    <FaInstagram size={32} />
                  </a>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <a rel="noopener noreferrer" className="blog-social youtube" href="https://www.youtube.com/channel/UC5oVQafwV9HBWide32SVZ_A" target="_blank" style={{ color: "white" }}>
                    <FaYoutube size={32} />
                  </a>
                </Col>
                <Col xs={6}>
                  <a rel="noopener noreferrer" className="blog-social whatsapp" href="https://www.facebook.com/Comercial-ECA-228237771035198/?rf=1198475553503426" target="_blank" style={{ color: "white" }}>
                    <FaWhatsapp size={32} />
                  </a>
                </Col>
              </Row>

            </div>
          </div>
        </Col>
      </Row>

    </Container>
  )
})
