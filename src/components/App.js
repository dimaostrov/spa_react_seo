import React, { Component } from "react";
import "./App.css";

import {
  SectionsContainer,
  Section,
  Header,
  Footer,
  ScrollToTopOnMount
} from "react-fullpage";
// import Map from "./Map";
import ContactForm from "./ContactForm";
import TeleHero from "./TeleHero";
import TelevisionRepair from "./TelevisionRepair";
import Audio from "./Audio";
import Specialist from "./Specialist";

let options = {
  sectionClassName: "section",
  anchors: ["Home", "About", "Gallery", "Contact"],
  scrollBar: false,
  navigation: false,
  verticalAlign: true,
  arrowNavigation: true,
  scrollingSpeed: 1200,
  dragAndMove: "fingersonly"
  // slidesNavigation: true
};

class App extends Component {
  render() {
    return (
      <div className="bg-white">
        <div className="">
          <ScrollToTopOnMount />
          <Header>
            <TelevisionRepair />
          </Header>
          <Footer>
            <footer className="bg-near-black white-80 pv1 pv2-l ph4 ph2-l center">
              <div className="flex justify-around mb0 pb0">
                <p className="f5">
                  <span className="dib mr4 mr5-ns">©2018 TeleSound</span>
                </p>
                <h3 className="pr2 mr2">(818) 705-0572</h3>
              </div>
            </footer>
          </Footer>
          <SectionsContainer className="container" {...options}>
            <Section className="custom-section" color="#F58F65d">
              <TeleHero />
            </Section>
            <Section color="#703BE8">
              <Specialist />
            </Section>
            <Section color="#603">
              <Audio />
            </Section>
            <Section color="#73C1FF">
              <ContactForm />
            </Section>
          </SectionsContainer>
        </div>
      </div>
    );
  }
}

export default App;
