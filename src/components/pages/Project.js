import React from "react";
import vibeForecast from "../../images/vibeForecast.png";
import sideSwipe from "../../images/sideSwipe.png";
import placeHolder from "../../images/placeHolder.png";
import fitConnect from "../../images/fitConnect.png";

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
    marginTop: "12vh",
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
      <article className="bg-image hover-zoom" style={styles.singleProj}>
        <a href="https://damp-coast-09297.herokuapp.com/" target="_blank">
          <img src={placeHolder} id="projIMG" alt="notetakerproj" />
        </a>
        <div>
          <h4 id="projWords">
            BrewScript! This application showcases my abilities to work with
            GraphQl and React. BrewScript is a subscription box platform that
            allows user to signup, pick their box, edit their box as well as
            browse our inventory and add things to upcoming orders. This month
            we did a Spo0oky theme!
          </h4>
        </div>
      </article>
      <article className="bg-image hover-zoom" style={styles.singleProj}>
        <a href="https://sheltered-coast-12686.herokuapp.com/" target="_blank">
          <img src={fitConnect} id="projIMG" alt="notetakerproj" />
        </a>
        <div>
          <h4 id="projWords">
            FitConnect is a Progressive Web Application that I built to help
            track my workouts. You can locally install this App on any device
            and input all of your workouts, and even track them in multiple
            styles of charts in the fitness dashboard.
          </h4>
        </div>
      </article>
      <article style={styles.singleProj}>
        <a
          href="https://adamkuemmel.github.io/theVibeForecast/"
          target="_blank"
        >
          <img
            id="projIMG"
            src={vibeForecast}
            // style={styles.img}
            alt="vibeForcast"
          />
        </a>

        {/* <h4 style={styles.title}>TheVibeForecast</h4> */}
        <h4 id="projWords">
          Do you ever have a hard time figuring out what to listen to? Vibe
          forecast is here to help with that. Using multiple API's, The Vibe
          forecast will find and display a music video for you, all based off of
          your local weather. This application will also save all of your recent
          listen in case you would like to come back and listen again!
        </h4>
      </article>
      <article className="bg-image hover-zoom" style={styles.singleProj}>
        <a href="https://thawing-mesa-73583.herokuapp.com/" target="_blank">
          <img src={sideSwipe} id="projIMG" alt="sideSwipe" />
        </a>
        <div>
          <h4 id="projWords">
            SideSwipe is a full stack application that allows a user to buy,
            sell and browse vehicles. A user has the option to hop on this
            website, create a profile and continue to log back in whenver they
            would like!
          </h4>
        </div>
      </article>
    </div>
  );
}
