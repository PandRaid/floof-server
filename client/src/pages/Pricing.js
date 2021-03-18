import React from 'react';
import '../styles/Available.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Pricing extends React.PureComponent {

  render() {
    return (
      <Container fluid>
      <Row className="spacing"></Row>
      <Row className="available__box__pad">
      	<Col></Col>
	    <Col xs={6} md={10} className="available__box box__color">
	    	  <h1 className="mt-2 available__text"> Pricing </h1>
	    	  <hr className="break_pad"/>
	    	  <Row className="info__text">
		    	  <Col xs={2} md={2}>
		    	  	<p>Fawn, Brindle, Pied</p>
		    	  	<p>Blue Brindle, Fawn</p>
		    	  	<p>Tri, Recessive Black</p>
		    	  	<p> Blue, Blue Tri</p>
		    	  	<p>Cream, Lilac</p>
		    	  	<p>Lilac Tri </p>
		    	  	<p> Platinum/Isabella </p>
		    	  	<p> Fluffy Carrier </p>
		    	  	<p> Visual Fluffy  </p>
		    	  </Col>
		    	  <Col xs={2} md={2}>
		    	  	<p>3000</p>
		    	  	<p>3500</p>
		    	  	<p>4000</p>
		    	  	<p>4500</p>
		    	  	<p>5500</p>
		    	  	<p>6000</p>
		    	  	<p>8000</p>
		    	  	<p> +3000 </p>
		    	  	<p> +7000 </p>
		    	  </Col>

	    	  </Row>
	    	  <Row className="info__text">
	    	  	<Col xs={6} md={6}>
	    	  		<br></br>
	    	  		<p> **All prices are subject to change based on DNA. These are the base prices and will increase based on DNA samples showing non-expressed recessive traits. </p>
	    	  	</Col>
	    	  </Row>

	    </Col>
	    <Col></Col>
	  </Row>
	  </Container>
    );
  }
}

export default Pricing;
