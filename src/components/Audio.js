import React, { Component } from "react";
import Modal from './Modal';

import img1 from '../img/IMG_20180606_152753.jpg';
import img2 from '../img/IMG_3585.jpg';
import img3 from '../img/IMG_3587.jpg';
import img4 from '../img/IMG_3588.jpg';
import img5 from '../img/IMG_3589.jpg';
import img6 from '../img/IMG_3590.jpg';


class Audio extends Component {
  render() {
    const imgs = [img1, img2, img3, img4, img5, img6];
    return (
      <div className="flex flex-wrap mw8 justify-around center">
        {imgs.map(x => <ImgContent src={x} key={x} close={this.toggleModal} />)}
      </div>
    );
  }
}

class ImgContent extends Component {
constructor(props){
  super(props)
  this.state = { isOpen: false }
}

toggleModal = () => {
  console.log('licked')
  this.setState({
    isOpen: !this.state.isOpen
  });
}
render() {
    return(
      <div>
        <img src={this.props.src} alt='' className="mw4 mw5-l ma2 ba br4 b--silver"/>
        <Modal show={this.state.isOpen}
          onClose={this.state.toggleModal}>
          <img src={this.props.src} className="mw4"/>
        </Modal>
      </div>
    )
  }
}

export default Audio;
