import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../components/NavBar'
import { Container } from 'react-bootstrap'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <NavBar />
      <Container>
           <Component {...pageProps} />
      </Container>
    </>
  ) 
}

export default MyApp
