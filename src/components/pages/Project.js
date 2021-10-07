import React from "react";
import vibeForecast from "../../images/vibeForecast.png";
import sideSwipe from "../../images/sideSwipe.png";
import placeHolder from "../../images/placeHolder.png";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

const styles = {
  singleProj: {
    // display: "flex",

    backgroundColor: "#0c0c0c",
    color: "#edf1cf",
  },

  title: {
    color: "#edf1cf",
    // marginTop: "15%",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "3rem",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "2%",
  },
  img: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "55%",
    marginTop: "5%",
  },
  img2: {
    maxWidth: "46rem",
    marginRight: "2%",
  },
  words: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "15px",
    textAlign: "center",
    marginLeft: "23%",
    marginRight: "23%",
    marginTop: "1%",
  },
};

export default function Project() {
  return (
    <div>
      <h1 style={styles.title}>Recent Work</h1>
      <article style={styles.singleProj}>
        <a
          className="bg-image hover-zoom"
          href="https://adamkuemmel.github.io/theVibeForecast/"
          target="_blank"
        >
          <img src={vibeForecast} style={styles.img} alt="vibeForcast" />
        </a>

        {/* <h4 style={styles.title}>TheVibeForecast</h4> */}
        <h4 style={styles.words}>
          Do you ever have a hard time figuring out what to listen to? Vibe
          forecast is here to help with that. Using multiple API's, The Vibe
          forecast will find and display a music video for you, all based of
          your local weather. This application will also save all of your recent
          listen in case you would like to come back and listen again!
        </h4>
      </article>
      <article className="bg-image hover-zoom" style={styles.singleProj}>
        <a href="https://thawing-mesa-73583.herokuapp.com/" target="_blank">
          <img src={sideSwipe} style={styles.img} alt="sideSwipe" />
        </a>
        <div>
          {/* <h4 style={styles.title}>sideSwipe</h4> */}
          <h4 style={styles.words}>
            SideSwipe is a full stack application that allows a user to buy,
            sell and browse vehicles. A user has the option to hop on this
            website, create a profile and continue to log back in whenver they
            would like!
          </h4>
        </div>
      </article>
      <article className="bg-image hover-zoom" style={styles.singleProj}>
        <a href="https://evening-atoll-81356.herokuapp.com/" target="_blank">
          <img src={placeHolder} style={styles.img} alt="notetakerproj" />
        </a>
        <div>
          {/* <h4 style={styles.title}>input proj 3 here</h4> */}
          <h4 style={styles.words}>
            here will put the thrd porject done in this clas, blah balh blah. it
            will be done in two week and probably have somethig t odo with
            coffee beans, hope you like coffee. Web Devs love coffee, drink up
            wooo
          </h4>
        </div>
      </article>
    </div>
  );
}
