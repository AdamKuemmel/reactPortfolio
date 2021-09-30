import React from "react";
const styles = {
  h1: {
    color: "#edf1cf",
    marginTop: "15%",
    fontFamily: "'Montserrat', sans-serif",
  },
  p: {},
  div: {
    textAlign: "center",
    color: "#939090",
    fontFamily: "'Montserrat', sans-serif",
  },
};

export default function Home() {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>
        Full-Stack Skills with a simple yet creative touch
      </h1>
      <p>
        You will find all of my beautiful user-friendly work presented here,
        come check it out!
      </p>
    </div>
  );
}
