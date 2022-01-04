import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
 
  return (
   
<Container fluid="md bg-dark bg-opacity-75 mt-5 mb-5 about-info">
{/* <div class="container bg-dark bg-opacity-50 portfolio-container mt-5 mb-5"> */}
    <h1 class="display-5 text-light text-center pt-2">About Me</h1>
    <Row className="justify-content-center about-details">
    {/* <div className="about-content container-fluid bg-opacity-50"> */}
    <Col sm={8}>
    <p class="lead text-light display-10" style={{fontSize: 25}}>I am a full stack web developer with a front-end focus.</p>
    <p class="lead text-light mt-2" style={{fontSize: 25}}>loem</p>

    </Col>
    </Row>
    {/* </div> */}
    
</Container>
  );
};




export default About;