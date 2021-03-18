import React from 'react';
import pups from '../images/pups.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import '../styles/About.css'

class About extends React.PureComponent {
  render() {
    return (
      <Container fluid>
      <Row className="spacing"></Row>
      <Row className="">
      	<Col></Col>
	    <Col xs={6} md={10} className="shadow about__text box__color">
	    	  <div className="box-sz">
		      <Image 
		      src={pups} 
		      className="pic__shadow pic-sz"
		      rounded />
		      </div>
		      <div className="pad">
		      Based in phoenix, Fluffy Family Frenchies produces high quality french bulldogs with health in mind. All our frenchies are guarenteed to be four panel clear so they
		      can have a long, healthy, and happy life with their new family - you! We produce a variety of different colors in FLUFFY and shorthair! All our pups have amazing structure and are well socialized with other dogs, cats and kids. We do not use kennels and all our dogs are strictly indoors which is why
		      it's called fluffy FAMILY frenchies, because they are a part of our family and we raise every single puppy with that in mind. Take a look around to see the parents, available puppies, future and
		      past litters. We hope you find your new best friend with us.
		      </div>
	    </Col>
	    <Col></Col>
	  </Row>
	</Container>
    );
  }
}

export default About;
