import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import resume from "../../images/sampleResume.png";
import dowloadRES from "../../images/AKresume.pdf";

const images = [resume];
const styles = {
  title: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "4%",
  },
  img: {
    maxWidth: " 20rem",
  },
  download: {
    fontFamily: "'Montserrat', sans-serif",
    color: "#edf1cf",
    fontSize: "20px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    marginTop: "5%",
    marginBottom: "5%",
  },
};

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);
    console.log("inlightbox");
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <button
          type="button"
          style={styles.title}
          onClick={() => this.setState({ isOpen: true })}
        >
          <img src={resume} style={styles.img} alt="vibeForcast" />
        </button>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}

        <a style={styles.download} href={dowloadRES} download>
          Download PDF
        </a>
      </div>
    );
  }
}
