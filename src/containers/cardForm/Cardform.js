import React from 'react';
import { Card, CardDeck, Row, Col, Form, FormControl } from 'react-bootstrap';

import './cardForm.css';

function cardForm() {
    return (
        <div style={{ position: 'static', width: '100%' }}>
            <CardDeck>

                <Card>
                    <Card.Body>
                        <Card.Text>
                            <Row>
                                <Col sm={6}>
                                    <div className="inputDiv">
                                    <label className="label">Name*</label><br />
                                    <input className="input" type='text' />
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="inputDiv">
                                    <label className="label">Phone Number*</label><br/>
                                    <input className="input" type='phone' />
                                    </div>
                                </Col>
                                <Col sm={12}>
                                    <div className="inputDiv">
                                    <label className="label">Property Address*</label><br />
                                    <input className="input3" type='text' />
                                    </div>
                                </Col>
                                <Col sm={12}>
                                    <div className="inputDiv">
                                    <input type="submit" value="Get MY Free Offer"/>
                                    </div>
                                </Col>
                            </Row>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
}

export default cardForm;
