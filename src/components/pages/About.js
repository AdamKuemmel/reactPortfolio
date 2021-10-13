import React from "react";

const styles = {
  h1: {
    color: "grey",
    marginTop: "15%",
  },
  p: {
    marginTop: "4%",
  },
  div: {
    marginRight: "11%",
    marginLeft: "11%",
    fontFamily: "'Montserrat', sans-serif",
    color: "#edf1cf",
  },
};

export default function About() {
  return (
    <div style={styles.div} className="aboutH1">
      <h1>Adam Kuemmel</h1>
      <p style={styles.p}>
        Hello, my name is Adam and I am a full stack web developer born and
        raised in New York. My love for web development all began in 2008 during
        the punk-scene kid era, designing in depth HTML myspace layouts for all
        of my hXc friends. This then migrated into a side-job designing websites
        for local bands in my area using JOOMLA templates for extra cash.
      </p>
      <p>
        Although I am fluent in JavaScript, HTML, CSS and various other coding
        technical skills, i like to define my skill set as my ability to learn
        and dedicate myself to things in which i do not understand. Fueled by an
        unbelievable desire to succeed and develop things that stand out in a
        world where everything may seem to be the same, i create things that are
        simple yet entertaining and inspiring to the desired user base.
      </p>
      <p>
        For more information about my technical skills and work experience,
        please check out my resume linked below
      </p>
    </div>
  );
}
