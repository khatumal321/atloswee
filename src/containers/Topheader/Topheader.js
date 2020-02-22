import React from 'react';
import './Topheader.css';
import { Container, Row, Col } from 'react-bootstrap';
import facebookIcon from './../../assests/icons/facebook.png';
import twitterIcon from './../../assests/icons/twitter.png'
import instagramIcon from './../../assests/icons/instagram.png'



function Topheader() {
    return (
        <div>

            <div id="top-header">
                <Container>
                    <Row>
                        <Col sm={8}>
                            <span><a href="tel:866-327-2072">866-327-2072</a><a></a></span><a>
                            </a><a href="mailto:"><span></span></a>
                        </Col>
                        <Col sm={4}>
                            <ul className="et-social-icons">
                                <li className="et-social-icon et-social-facebook">
                                    <a href="https://www.facebook.com/offerhomes/" className="icon">
                                        <img src={facebookIcon} className="fb" width="30px" height="30px" />
                                    </a>
                                </li>
                                <li className="et-social-icon et-social-twitter">
                                    <a href="https://twitter.com/offerhomes" className="icon">
                                        <img src={twitterIcon} className="fb" width="30px" height="30px" />
                                    </a>
                                </li>
                                <li className="et-social-icon et-social-instagram">
                                    <a href="https://www.instagram.com/offer.home/" className="icon">
                                        <img src={instagramIcon} className="fb" width="30px" height="30px" />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row >
                </Container>
            </div>

        </div>
    );
}

export default Topheader;
