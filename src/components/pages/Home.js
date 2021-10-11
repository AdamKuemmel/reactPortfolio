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
    fontSize: "18px",
  },
  div: {
    textAlign: "center",
    color: "#939090",
    fontFamily: "'Montserrat', sans-serif",
  },
  img: {
    maxHeight: "60vh",
    marginTop: "2%",
  },
};

export default function Home({ currentPage, handlePageChange }) {
  return (
    <div style={styles.div}>
      <img
        src={keyboard}
        // onClick={() => handlePageChange("Projects")}
        style={styles.img}
      />
      <h1 style={styles.h1}>
        Full-Stack skills with a simple and creative touch.
      </h1>
      <p style={styles.p}>
        You will find all of my beautiful user-friendly work presented here,
        Click the keyboard to see!
      </p>
    </div>
  );
}