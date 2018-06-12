import React, { Component } from "react";
import "./App.css";

import { SectionsContainer, Section, Header, Footer, ScrollToTopOnMount } from "react-fullpage";
import Map from './Map';
import ContactForm from './ContactForm';
import TeleHero from './TeleHero';

let options = {
  sectionClassName: "section",
  anchors: ["Home", "About", "Gallery", "Contact", "Map"],
  scrollBar: false,
  navigation: true,
  verticalAlign: true,
  arrowNavigation: true,
  scrollingSpeed: 1200,
  dragAndMove: "fingersonly",
  // slidesNavigation: true
};

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <nav class="bg-black-80 pa3 pa4-ns">
            <a
              class="link dim white b f6 f5-ns dib mr3"
              href="#Home"
              title="Home"
            >
              TELESOUND
            </a>
            <a
              class="link dim white f6 f5-ns dib mr3"
              href="#About"
              title="About"
            >
              About
            </a>
            <a
              class="link dim white f6 f5-ns dib mr3"
              href="#Gallery"
              title="Gallery"
            >
              Gallery
            </a>
            <a
              class="link dim white f6 f5-ns dib mr3"
              href="#Contact"
              title="Contact"
            >
              Contact
            </a>
          </nav>
        </Header>
        <Footer>
          <footer class="bg-near-black white-80 pv1 pv2-l ph4">
            <p class="f6">
              <span class="dib mr4 mr5-ns">©2018 TeleSound</span>
            </p>
          </footer>
        </Footer>
        <ScrollToTopOnMount />
        <SectionsContainer className="container" {...options}>
          <Section className="custom-section" color="#F58F65">
            <TeleHero />
          </Section>
          <Section color="#703BE8">About</Section>
          <Section color="#FF69C9">Gallery</Section>
          <Section color="#73C1FF"><ContactForm /></Section>
          <Section color="#02F3F5">
            <Map isMarkerShown 
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
