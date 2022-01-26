import React from "react";
import keyboard from "../../images/shortGif.gif";
const styles = {
  h1: {
    color: "#edf1cf",
    // marginTop: "15%",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "32px",
  },
  p: {
    fontSize: "35px",
  },
  div: {
    textAlign: "center",
    color: "#939090",
    fontFamily: "'Montserrat', sans-serif",
  },
  img: {
    maxHeight: "60vh",
    marginTop: "7%",
  },
};

const Home = () => {
  return (
    <div style={styles.div}>
      <a target="_blank">
        <img className="keyImage" src={keyboard} style={styles.img} />
      </a>

      <div class="sign">
        <span class="fast-flicker">Full Stack</span> skills with a
        <span class="flicker"> simple</span> and
        <span class="flicker"> creative</span> touch.
      </div>

      <div class="deconstructed" id="deconstructed">
        <div> Click the keyboard to see more!</div>
        <div> Click the keyboard to see more!</div>
        <div> Click the keyboard to see more!</div>
        <div> Click the keyboard to see more!</div>
      </div>
    </div>
  );
};

export default Home;
