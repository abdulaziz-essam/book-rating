import React from 'react'
import {Card,Button} from 'react-bootstrap'
import './book.css'
import ReactStars from "react-rating-stars-component";
import { useState } from "react";


export default function Book() {
    const numbers = ["good book ", "very simple to new reader"
    , "very simple to new reader", "very simple to new reader", "very simple to new reader"];
const listItems = numbers.map((number) =>
 <div className='opinion'> <h1>user name</h1><li>{number}</li></div>
);
const [stars, setStars] = useState(4);
var example = {
    size: 60,
   
    
    value: stars,
    onChange: (newValue) => {
      setStars(newValue);
    }
  };
  return (
    <div>
        
        <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Rate Book</Button>
        
      </Card.Body>
    </Card>
    <div className="App">
      <h1>react-rating-stars-component</h1>
      {/* <button onClick={() => setStars(5)}>Set To 5</button> */}
      <ReactStars  activeColor="#ffd700" {...example} />
    </div>
    <div className='user-op' >
{listItems}
</div>
    </div>
  )
}
