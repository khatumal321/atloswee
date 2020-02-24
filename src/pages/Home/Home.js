import React from 'react';
import './Home.css';
import Navbar from './../../containers/Navbar/Navbar'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Img1 from './../../assests/images/img1.jpg';
import CardImg from './../../assests/icons/facebook.png';
import Cards from './../../components/Cards/Cards';
import Cards2 from './../../components/card2/card2';
import Faircard from './../../components/Faircard/Faircard';
import Logo from "./../../assests/logo/logo.png";
import Slider from './../../components/silder/slider'
import Location from './../../assests/icons/location-1456-496566.webp'



function Home() {
  return (
    <div>
      <header className="mainHeader">
        <Container>
          <Navbar />
          <Row className="row2" style={{ position: "relative" }}>
            <Col lg={12}>
              <h1 style={{ textAlign: "center" }}>Join</h1>
            </Col>
            <Col lg={12}>
              <h1 style={{ textAlign: "center" }}>
                The best <b style={{ color: "red" }}>2020</b> Music concert Now
              </h1>
            </Col>
            <Col lg={12}  style={{ textAlign: "center", justifyContent : "center"}}>
              <ol style={{ listStyleType: "none", textAlign: "center", marginLeft : "30%"}}>
                <li
                  style={{
                    float: "left",
                    marginLeft: "20px",
                    fontSize: "35px"
                  }}
                >
                  01
                  <br /> 
                  <span style= {{fontSize : "20px"}}>days </span>
                </li>
                <li
                  style={{
                    float: "left",
                    marginLeft: "20px",
                    fontSize: "35px"
                  }}
                >
                  09
                  <br />
                  <span style= {{fontSize : "20px"}}> Hours</span>
                </li>
                <li
                  style={{
                    float: "left",
                    marginLeft: "20px",
                    fontSize: "35px"
                  }}
                >
                  33
                  <br />
                  <span style= {{fontSize : "20px"}}> Minutes</span>
                </li>
                <li
                  style={{
                    float: "left",
                    marginLeft: "20px",
                    fontSize: "35px"
                  }}
                >
                  36
                  <br /> 
                  <span style= {{fontSize : "20px"}}>Seconds</span>
                </li>
              </ol>
            </Col>
        
          </Row>
          <Row>
            <Slider />
            </Row>
          <Row className="form" style={{ position: "relative" }}>
            <Col sm={3} md={3} lg={3}>
              <Cards
                CardImg={Location}
                title="Banatlt No. 1"
                des="Answer a few questions and snap some photos –."
              />
            </Col>
            <Col sm={3} md={3} lg={3}>
              <Cards
                CardImg={Location}
                title="Banatlt No. 2"
                des="Answer a few questions and snap some photos –."
              />
            </Col>
            <Col sm={3} md={3} lg={3}>
              <Cards
                CardImg={Location}
                title="Banatlt No. 3"
                des="Answer a few questions and snap some photos –."
              />
            </Col>
            <Col sm={3} md={3} lg={3}>
              <Cards
                CardImg={Location}
                title="Banatlt No. 4"
                des="Answer a few questions and snap some photos –."
              />
            </Col>
          </Row>

          <Row className="row2" style={{ position: "relative" }}>
            <Col lg={12}>
              <h1 style={{ textAlign: "center" }}>Keep In Touch</h1>
            </Col>
            <Col lg={12}>
              <p style={{ textAlign: "center", fontSize: "20px" }}>
               <span style= {{color: "red"}}>  started </span>with React Router in a web app,  <span style= {{color: "red"}}>  started </span>you’ll need a
                React web app. If you need to create one, we recommend you try
                Create React App. It’s a popular tool that works really well
                with React Router.
              </p>
            </Col>
            <Col lg={12} style={{ textAlign: "center" }}>
              <input
                type="text"
                name="name"
                placeholder="click here"
                style={{
                  width: "30%",
                  height: "50px",
                  color: "white",
                  fontSize: "25px",
                  backgroundColor: "transparent",
                  border: "none",
                  borderBottomColor: "white",
                  borderBottomStyle: "solid",
                  borderBottomWidth: "5px",
                  outline: "none",
                }}
              />
              <Button
                style={{
                  backgroundColor: "red",
                  borderRadius: "20px",
                  width: "150px",
                  height: "45px",
                  marginLeft: "20px"
                }}
              >
                join Now
              </Button>
            </Col>
            <br />
            <br />
            <br />
            <Col lg={6}>
              <h1>Previous concert</h1>
              <p style={{ fontSize: "20px" }}>jkahsgk algkjagjkl akgja</p>
            </Col>
          </Row>

          <Row
            className="form"
            style={{ position: "relative", textAlign: "center" }}
          >
            <Col sm={3} lg={6}>
              <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1"></iframe>
            </Col>
            <Col sm={3} lg={6}>
              <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1"></iframe>
            </Col>
            <Col sm={3} lg={6}>
              <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1"></iframe>
            </Col>
            <Col sm={3} lg={6}>
              <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1"></iframe>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row
            className="form"
            style={{ position: "relative", textAlign: "center" }}
          >
            <Col sm={4} lg={4}>
            <Cards2 color = "red"  day = "Day One"/>

            </Col>
            <Col sm={4} lg={4}>
            <Cards2  color = "blue"  day = "Day Two"/>

            </Col>
            <Col sm={4} lg={4}>
            <Cards2 color = "red" day = "Day Three"/>
            </Col>
          </Row>

           <Row
            className="form"
            style={{ position: "relative", textAlign: "center" }}
          >
      
          </Row>

          <Row
            className="form"
            style={{ position: "relative", textAlign: "center" }}
          >
            <Col lg={6}>
              <h1 style={{ color: "white" }}>Main information</h1>
              <p style={{ color: "white", fontSize: "20px" }}>
                jkahsgk algkjagjkl akgja
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={4} lg={4}>
              <Faircard
                CardImg={Location}
                title="Get 3 Fair Offers"
                des="we’ll send your cash offer  "
              />
            </Col>
            <Col sm={4} lg={4}>
              <Faircard
                CardImg={Location}
                title="Get 3 Fair Offers"
                des="we’ll send your cash offer "
              />
            </Col>
            <Col sm={4} lg={4}>
              <Faircard
                CardImg={Location }
                title="Get 3 Fair Offers"
                des="we’ll send your cash offer "
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <img
                src={Logo}
                style={{
                  width: "250px",
                  height: "250px",
                  marginTop: "-50%",
                  textAlign: "center",
                  marginLeft: "80%"
                }}
              />
              <div style={{marginLeft: '50%'}}>
              <img 
                 style={{
                  textAlign: "center",                   
                  width: "50px",
                  height: "50px",
          
                }}
            src={Location}
              />
                <img 
                 style={{
                  width: "50px",
                  height: "50px",
                
                }}
            src={Location}
              />
         <img 
                 style={{
                  width: "50px",
                  height: "50px",
                
                }}
            src={Location}
              />       <img 
              style={{
               width: "50px",
               height: "50px",
             
             }}
         src={Location}
           />
                  <img 
                 style={{
                  width: "50px",
                  height: "50px",
                
                }}
            src={Location}
              />
              </div>
           
            </Col>
          </Row>
        
        </Container>
      </header>
    </div>
  );
}

export default Home;
