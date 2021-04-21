import React from "react";

class ImageCard extends React.Component {
  // This is for get the height of the image-----------------------------

  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    // Creating a image reference and use into <img> tag
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    //console.log(this.imageRef);
    //console.log(this.imageRef.current.clientHeight);
    // when the image is load show the reference (height,weight..)
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    // height/grid-auto-rows (in css file)
    const spans = Math.ceil(height / 10 + 1);
    this.setState({ spans: spans });
  };
  //---------------------------------------------------------------------

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          alt={this.props.image.description}
          src={this.props.image.urls.regular}
        ></img>
      </div>
    );
  }
}

export default ImageCard;
