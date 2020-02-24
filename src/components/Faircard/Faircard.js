import React from 'react';
import './Faircard.css';

import { Card, Button } from 'react-bootstrap';


function Faircard(props) {
    return (
      <div>
        <div className="main">
          <Card.Body className="rightcard">
          <img src={props.CardImg} className="img" />
            <h3>{props.title}</h3>
            <Card.Text>{props.des}</Card.Text>
          </Card.Body>
        </div>
      </div>
    );
}

export default Faircard;
