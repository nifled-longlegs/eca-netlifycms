import styled from 'styled-components'


const FooterStyles = styled.div`
  width: 100%;
  /* background: linear-gradient(90deg, rgba(0,170,232,1) 0%, rgba(91,210,255,1) 35%, rgba(255,255,255,1) 100%); */
  background: black;
  
  margin-top: 3rem;
  padding: 3rem;
  font-family: "SpartanMB Regular";
  text-transform: uppercase;
  color: white;

  .footer-section__title {
    margin-bottom: 1rem;
    color: white;
     h4 {
        font-size: 1.1rem;
     }
  }

  .footer-section__text {
    color: white;

    p {
      font-size: 0.85rem;
    }
  }

  .footer-social {
    margin-bottom: 1rem;
  }

  .footer-section__form {
    input, button {
      border-radius: 3rem;
      padding: 1rem;
    }

    input:focus, button:focus { outline: none; }

    input {
      background: black;
      border-color: white;
    }

    button {
      background: white;
      border-color: black;
      color: black;
    }
  }

  @media (min-width: 998px) {
    .footer-section {
      padding: 0 2rem;
    }
  }

  @media (max-width: 768px) {
    .footer-section {
      margin-top: 3rem;
    }
  }
`

export default FooterStyles
