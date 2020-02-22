import React from 'react';
import './Cards.css';

import CardImg from './../../assests/images/Give-us-a-Call.jpg'
import { Card, Button } from 'react-bootstrap';


function Home(props) {
    return (
        <div>
            <div className="main" >
                {/* <img src={props.CardImg} className="img" /> */}
                <Card.Body className="rightcard" >
                    <h3>{props.title}</h3>
                    <Card.Text>
                        {props.des}
                    </Card.Text>
                </Card.Body>
            </div>
        </div>
    );
}

export default Home;
