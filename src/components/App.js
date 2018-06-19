import React, { Component } from "react";
import "./App.css";

import { SectionsContainer, Section, Header, Footer, ScrollToTopOnMount } from "react-fullpage";
import Map from './Map';
import ContactForm from './ContactForm';
import TeleHero from './TeleHero';
import TelevisionRepair from './TelevisionRepair';
import Audio from './Audio';
import Specialist from './Specialist';


let options = {
  sectionClassName: "section",
  anchors: ["Home", "About", "Gallery", "Contact"],
  scrollBar: false,
  navigation: false,
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
        <ScrollToTopOnMount />
        <Header>
          <TelevisionRepair />
        </Header>
        <Footer>
          <footer class="bg-near-black white-80 pv1 pv2-l ph4">
            <p class="f6">
              <span class="dib mr4 mr5-ns">©2018 TeleSound</span>
            </p>
          </footer>
        </Footer>
        <SectionsContainer className="container" {...options}>
          <Section className="custom-section" color="#F58F65">
            <TeleHero />
          </Section>
          <Section color="#703BE8"><Specialist /></Section>
          <Section color="#F58F65"><Audio /></Section>
          <Section color="#73C1FF"><ContactForm /></Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
