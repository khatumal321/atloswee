import React, { Component } from "react";
import Img1 from './../../assests/images/img1.jpg';
import ReactCoverCarousel from 'react-cover-carousel';
export default class Slider extends React.Component {
  render() {
    const allOfYourImages = [
        <img src={Img1} />, 
        <img src= {Img1}/>,
        <img src= {Img1}/>,
        <img src= {Img1}/>,
        <img src= {Img1}/>
        ];
    return <ReactCoverCarousel style= {{backgroundColor: "none"}}>{allOfYourImages}</ReactCoverCarousel>
}
}