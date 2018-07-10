import React, { Component } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import ELECTRONICS from "../img/storefront.png";

class Audio extends Component {
  render() {
    return (
      <div className="tc h5-l">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={60}
          totalSlides={4}
          className="top-1-l"
        >
          <Slider>
            <Slide index={0}>
              <img src={ELECTRONICS} alt="store front" />
            </Slide>
            <Slide index={1}>
              <img
                src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"
                alt="store front"
              />
            </Slide>
            <Slide index={2}>
              <img
                src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"
                alt="store front"
              />
            </Slide>
            <Slide index={3}>
              <img
                src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"
                alt="store front"
              />
            </Slide>
          </Slider>
          <div className="tc">
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    );
  }
}

export default Audio;
