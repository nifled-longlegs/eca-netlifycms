import styled from 'styled-components'


const LogoStyles = styled.div`
  order: 2;
  margin-top: 2rem;

  @media (min-width: 1024px) {
  	img {
  		width: 425px;
  	}
  }

  @media (max-width: 768px) {
    margin-top: 0;
    order: inherit;

    img {
      width: 160px;
    }
  }
`

export default LogoStyles
