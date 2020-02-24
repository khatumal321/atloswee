import React from 'react';
import './Cards.css';
import { Card, Button } from 'react-bootstrap';


function Home(props) {
    return (
        <div>
            <div className="main" >
                <Card.Body className="rightcard" >
                <img src={props.CardImg} className="img" />
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
