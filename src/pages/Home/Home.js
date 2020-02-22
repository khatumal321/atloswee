import React from 'react';
import './Home.css';
import Navbar from './../../containers/Navbar/Navbar'
import { Container, Row, Col } from 'react-bootstrap';
import Cardform from './../../containers/cardForm/Cardform';
import Img1 from './../../assests/images/img1.jpg';
import BestBuyers from './../../assests/images/OfferHome-BestBuyers1-e1556151924865.png'
import Yourhouse from "./../../assests/images/OfferHome12.jpeg"
import Cards from './../../components/Cards/Cards';
import Faircard from './../../components/Faircard/Faircard';
import CardImg1 from './../../assests/images/Give-us-a-Call.jpg';
import CardImg2 from './../../assests/images/Get-Cash-Offer.jpg';
import CardImg3 from './../../assests/images/Move-Out.jpg';
import Button from './../../components/Button/Button'


function Home() {
  return (
    <div>
      <header className="mainHeader">

        <Container>
    <Navbar />
          <Row className="row2" style={{ paddingTop: '15%', position: 'relative' }}>
            <Col lg={12}><h1 style={{textAlign: 'center'}}>Join</h1></Col>
            <Col lg={12}><h1 style={{textAlign: 'center'}}>The best <b style={{color: 'red'}}>2020</b> Music concert Now</h1></Col>
            <Col lg={12}>
            <ol style={{listStyleType: 'none', textAlign: 'center'}}>
              <li style={{float: 'left', marginLeft: '20px', fontSize: '35px'}}>01<br/> days</li>
              <li style={{float: 'left', marginLeft: '20px', fontSize: '35px'}}>09<br/> Hours</li>
              <li style={{float: 'left', marginLeft: '20px', fontSize: '35px'}}>33<br/> Min</li>
              <li style={{float: 'left', marginLeft: '20px', fontSize: '35px'}}>36<br/> Sec</li>
            </ol>
            </Col>
            <Col md={{ span: 6, offset: 3 }}><img src={Img1} className="fivestarimg" /></Col>
          </Row>
          <Row className="form" style={{ paddingTop: '2%', position: 'relative' }}>
            <Col sm={3} lg={3}>
            <Cards
          CardImg={CardImg1}
          title="Tell us about your home"
          des="Answer a few questions and snap some photos – no need to clean! We’ll review the information and calculate your offer."

        />
            </Col>
            <Col sm={3} lg={3}>
            <Cards
          CardImg={CardImg1}
          title="Tell us about your home"
          des="Answer a few questions and snap some photos – no need to clean! We’ll review the information and calculate your offer."

        />
            </Col>
            <Col sm={3} lg={3}>
            <Cards
          CardImg={CardImg1}
          title="Tell us about your home"
          des="Answer a few questions and snap some photos – no need to clean! We’ll review the information and calculate your offer."

        />
            </Col>
            <Col sm={3} lg={3}>
            <Cards
          CardImg={CardImg1}
          title="Tell us about your home"
          des="Answer a few questions and snap some photos – no need to clean! We’ll review the information and calculate your offer."

        />
            </Col>
          </Row>

          <Row className="row2" style={{ paddingTop: '15%', position: 'relative' }}>
            <Col lg={12}><h1 style={{textAlign: 'center'}}>Keep In Touch</h1></Col>
            <Col lg={12}><p style={{textAlign: 'center', fontSize: '20px'}}>To get started with React Router in a web app, you’ll need a React web app. If you need to create one, we recommend you try Create React App. It’s a popular tool that works really well with React Router.</p></Col>
            <Col lg={12}>
              <input type="text"/>
            </Col>
          </Row>
        </Container>
      </header>
      {/* =================section 2============= */}
      {/* <div id="section2">
        <Container>
          <Row>
            <Col lg={12} style={{ width: "100%" }}>
              <center>
                <img src={FiveStar} className="fivestarimg" />
              </center>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Cards
          CardImg={CardImg1}
          title="Tell us about your home"
          des="Answer a few questions and snap some photos – no need to clean! We’ll review the information and calculate your offer."

        />
      </div>
      <div style={{ marginTop: 30 }}>
        <Faircard
          CardImg={CardImg2}
          title="Get 3 Fair Offers"
          des="we’ll send your cash offer within a few days, then you decide: Accept the offer, decline the offer or work with an agent. It’s up to you."
        />
      </div>
      <div style={{ marginTop: 30 }}>
        <Cards
          CardImg={CardImg3}
          title="Set Your Closing Date"
          des="Once you accept the offer, pick a closing date that works for you. We’ll arrange a home evaluation and prepare your payment!"
        />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button/>
      <br />
      <br />
      <br />
      <br />
      <br /> */}

      {/* =================section 2============= */}
      {/* <div id="section2">
        <Container>
          <Row>
            <Col lg={12} style={{ width: "100%" }}>
              <center>
                <img src={BestBuyers} className="BestBuyersimg" />
              </center>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <img src={Yourhouse} width='100%' height='300px' />
          </Col>
          <Col>
            <div>
              <h2>WONDERING HOW TO SELL YOUR HOUSE FAST?</h2>
              <p>“My wife Viviane and I love Offer home! The process was exactly as advertised.
                 We were given the flexibility to change our closing date when needed. It was no
                 problem for Offer home. They were absolutely fantastic every step of the way.
                 From the quick sale, to paying for the movers, we believe selling a home to them
                  is the absolute easiest!”
                  </p>
              <input type="button" value="GET A CASH OFFER TODAY" />
            </div>
          </Col>
        </Row>
      </Container> */}


    </div>
  );
}

export default Home;
