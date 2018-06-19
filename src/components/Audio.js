import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import ELECTRONICS from "../img/storefront.png";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class Audio extends React.Component {
  render() {
    return (
        <Carousel dynamicHeight>
          <div>
            <img className='mw5' src={ELECTRONICS} alt="" />
          </div>
          <div>
            <img src={ELECTRONICS} alt="" />
          </div>
          <div>
            <img src={ELECTRONICS} alt="" />
          </div>
        </Carousel>
    );
  }
}

export default Audio;
