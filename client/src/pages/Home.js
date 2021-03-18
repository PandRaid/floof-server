import React from 'react';
import yosh from '../images/yosh.jpg'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.PureComponent {
  render() {
    return (
      <div>
      	<Carousel>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src={yosh}
		      alt="First slide"
		    />
		    <Carousel.Caption>
		      <h3>Your new frenchie awaits</h3>
		      <p>Premium Pups at a Family Price</p>
		    </Carousel.Caption>
		  </Carousel.Item>
	  	</Carousel>
      </div>
    );
  }
}

export default Home;
