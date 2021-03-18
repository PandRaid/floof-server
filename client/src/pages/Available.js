import React from 'react';
import '../styles/Available.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReactHtmlParser from 'react-html-parser'; 
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel';


function getRows(props) {
	var rows = [];
	var avail = arguments[0];

	var url_base = 'http://localhost:5000/static/';

	if (avail !==
	 undefined && avail.pics > 0){
		var numPics = avail.pics;
		var name = avail.name;
		for (var i = 0; i < numPics; i++) {
			var url = url_base + name + '/' + name + '-' + (i+1) + '.jpg'
		    rows.push(
		    	<Carousel.Item>
			    <img
			      className="d-block w-100"
			      src={url}
			      alt="First slide"
			    />
			    <Carousel.Caption>
			      <h3>Your new frenchie awaits</h3>
			      <p>Premium Pups at a Family Price</p>
			    </Carousel.Caption>
			  </Carousel.Item>
		    	);
		}
	}
	return (rows);
}

class Available extends React.PureComponent {


  // Retrieves the list of items from the Express app
  constructor(props){
    super(props);
    this.state = {
      avail: [],
      exp: [],
      past: [],
      modalShow: false,
      current: 0
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getAvail();
  }

  // Retrieves the list of items from the Express app
  getAvail = () => {
    fetch('/avail')
    .then(res => res.json())
    .then(data => this.setState({ avail : data.available, exp : data.expected, past : data.past }))
  }

  render() {
  	const {avail} = this.state;
  	const {exp} = this.state;
  	const {past} = this.state;
  	const {current} = this.state;


    return (
      <Container fluid>
      <Modal
	      show={this.state.modalShow}
          onHide={() => this.setState({modalShow : false, current: []})}
	      size="lg"
	      aria-labelledby="contained-modal-title-vcenter"
	      centered
	    >
	      <Carousel>
	      	{
	      	(avail.length > 0) && 
			  getRows(avail[current])
			}
		  	</Carousel>
	    </Modal>

      <Row className="spacing" id="moo"></Row>
      <Row className="available__box__pad">
      	<Col></Col>
	    <Col xs={6} md={10} className="available__box box__color">
	    	  <h1 className="mt-2 available__text"> Available </h1>
	    	  <hr className="break_pad"/>

			  <div className="info_text">

		    	  	{   (avail.length > 0) &&
	    	  			avail.map((item, index) => {
			    	  		return (
			    	  			<>
			    	  			{!(index % 2) ?
			    	  				<Row>
			    	  				<Col xs={2} md={2}></Col>
			    	  				<Col xs={4} md={4}>
			    	  					<div className="info__text">
			    	  					<img className="wide" src={'http://localhost:5000/static/' + item.name + '/' + item.name + '-1.jpg'} onClick={() => this.setState({modalShow : true, current : index})}/>
			    	  					<br/><br/><hr className="break_pad"/> 
								  		Name : {item.name} <br/>
								  		Birthday : {item.birthdate} <br/>
								  		Color : {item.color} <br/>
								  		{item.description} <br/>
								  		<br/>
								  		</div>
			    	  				</Col>
			    	  				<Col xs={4} md={4}>
			    	  					{(index < avail.length) ?
			    	  						<div className="info__text">
				    	  					<img className="wide" src={'http://localhost:5000/static/' + avail[index+1].name + '/' + avail[index+1].name + '-1.jpg'} onClick={() => this.setState({modalShow : true, current : (index+1)})}/>
				    	  					<br/><br/><hr className="break_pad"/> 
									  		Name : {avail[index+1].name} <br/>
									  		Birthday : {avail[index+1].birthdate} <br/>
									  		Color : {avail[index+1].color} <br/>
									  		{avail[index+1].description} <br/>
									  		<br/>
									  		</div>
			    	  					:""}
			    	  				</Col>
			    	  				</Row>

			    	  				:
			    	  				""
			    	  			}
			    	  			</>
			    	  		);
		    	  		})
		    	  	}
		    	</div>
	      
				    	  
	    </Col>
	    <Col></Col>
	  </Row>
	  <Row className="available__box__pad">
      	<Col></Col>
	    <Col xs={6} md={10} className="available__box box__color">
	    	  <h1 className="mt-2 available__text"> Expected </h1>
	    	  <hr className="break_pad"/>
	    	  		<div className="info__text">

              {   (exp.length > 0) &&
                exp.map((item, index) => {
                  return (
                    <>
                        { (index % 2) ?
                        <Row>
                        <Col xs={2} md={2}></Col>
                        <Col xs={4} md={4}>
                            <img className="double-wide" src={'http://localhost:5000/static/expected/' + item.mom + 'x' + item.dad + '.jpg'}/>
                        </Col>
                        <Col xs={4} md={4} className="expected_text">
					  		Mom : {item.mom} <br/>
					  		Mom DNA: {item.mom_dna} <br/>
					  		Dad : {item.dad} <br/>
					  		Dad DNA : {item.dad_dna} <br/>
					  		Expected Date : {item.exp} <br/>
					  		{item.description} <br/>
					  		<br/>
                        </Col>
                        </Row>
                        :
                        <Row>
                        <Col xs={2} md={2}></Col>
                        <Col xs={4} md={4} className="expected_text">
                           	Mom : {item.mom} <br/>
					  		Mom DNA: {item.mom_dna} <br/>
					  		Dad : {item.dad} <br/>
					  		Dad DNA : {item.dad_dna} <br/>
					  		Expected Date : {item.exp} <br/>
					  		{item.description} <br/>
					  		<br/>
                        </Col>
                        <Col xs={4} md={4}>
                            <img className="double-wide" src={'http://localhost:5000/static/expected/' + item.mom + 'x' + item.dad + '.jpg'}/>
                        </Col>
                        </Row>
                      }
                      <br/><hr/><br/>
                    </>
                  );
                })
              }
          </div>
	    </Col>
	    <Col></Col>
	  </Row>
	  
	  
	</Container>
    );
  }
}

export default Available;
