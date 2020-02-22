import React from 'react';
import './Faircard.css';

import { Card, Button } from 'react-bootstrap';


function Faircard(props) {
    return (
        <div>
            <div className="main2" >
                <br />
                <br />
                <br />
                <br />
                <br />
                <img src={props.CardImg} className="img2" />
                <Card.Body className="rightcard2" >
                    <h3>{props.title}</h3>
                    <Card.Text>
                        {props.des}
                    </Card.Text>
                </Card.Body>
            </div>
            <div className="mobile">

                <Card style={{ width: '100%' }}>
                    <img src={props.CardImg} width="100%" />
                    <Card.Body >
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.des}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Faircard;
