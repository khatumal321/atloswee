import React from 'react';
import { Card, Button } from 'react-bootstrap';


function Cards(props) {
    return (
        <div>
        <Card text="white" style={{ width: '18rem', backgroundColor: 'transparent'}}>
    <Card.Header style= {{backgroundColor : props.color}}>{props.day}</Card.Header>
    <Card.Body>
      <Card.Title>Group Name</Card.Title>
      <Card.Text style= {{color : props.color}}>Name</Card.Text>
      
      <Card.Text>
        Some quick example text to build on the card title and make up the
       
      </Card.Text>
      <hr />
      <Card.Title>Group Name</Card.Title>
      <Card.Text style= {{color : props.color}}>Name</Card.Text>
      <Card.Text>
        Some quick example text to build on the card title and make up the
    
      </Card.Text>
    </Card.Body>
  </Card>
        </div>
    );
}

export default Cards;
