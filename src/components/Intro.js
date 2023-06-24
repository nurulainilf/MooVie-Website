import { Col, Container, Row } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className="intro">
          <Container className="text-white text-center d-flex justify-content-center align-items-center">
           <Row>
            <Col>
             <div className="title">MILLIONS OF MOVIES</div>
             <div className="title">AND TV SHOWS</div>
             <div className="title">EXPLORE NOW</div>
             
            </Col>
          </Row>
         </Container>
        </div>
    )
}

export default Intro