import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap'

import logo from '../../assets/img/logo.png'
import HeaderStyles from './styles/HeaderStyles'
import LogoStyles from './styles/LogoStyles'


class Header extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.linkCollapse = this.linkCollapse.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  linkCollapse() {
    this.setState({ isOpen: false })
  }

  render() {
    return (
      <HeaderStyles>
        <Navbar color="faded" light expand="md">

          <LogoStyles>
            <NavbarBrand tag={NavLink} to="/">
              <img className="img-fluid header__brand" src={ logo } alt="Logo ECA" />
            </NavbarBrand>
          </LogoStyles>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink exact to="/" activeClassName="active" onClick={this.linkCollapse} className="header-link">Calidad ECA</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/servicios" activeClassName="active" onClick={this.linkCollapse} className="header-link">Servicios</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/clientes" activeClassName="active" onClick={this.linkCollapse} className="header-link">Clientes Satisfechos</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/novedades" activeClassName="active" onClick={this.linkCollapse} className="header-link">Novedades</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/contacto" activeClassName="active" onClick={this.linkCollapse} className="header-link">Contact/Info</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </HeaderStyles>
    );
  }
}

export default Header
