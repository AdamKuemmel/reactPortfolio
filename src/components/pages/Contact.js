import React from "react";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";

const styles = {
  logo: {
    maxWidth: "50%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  Alogo: {
    maxWidth: "20%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  logoCon: {
    flexDirection: "row",
    display: "flex",
    marginBottom: "3%",
    alignContent: "",
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
  form: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "column",
    maxWidth: "25rem",
    backgroundColor: "#0c0c0c",
    color: "#edf1cf",
    fontFamily: "'Montserrat', sans-serif",
  },
  input: {
    maxWidth: "15rem",
  },
  words: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "15px",
    textAlign: "center",
    marginLeft: "23%",
    marginRight: "23%",
    marginTop: "1%",
    marginBottom: "3%",
    color: "#edf1cf",
  },
  transBox: {
    border: "0",
    backgroundColor: "transparent",
    borderBottom: "1px solid #edf1cf",
    marginBottom: "3%",
    color: "#edf1cf",
  },
  subBox: {
    border: "0",
    backgroundColor: "transparent",
    border: "1px solid #edf1cf",
    marginBottom: "1%",
    color: "#edf1cf",
  },
};
export default function Contact() {
  return (
    <div>
      <div>
        <h1 style={styles.title}>Contact Page</h1>
        <p style={styles.words}>
          If you would like to contact me, here are a few ways to do so.
        </p>
        <div style={styles.logoCon}>
          <a
            href="https://github.com/AdamKuemmel"
            style={styles.Alogo}
            target="no_blank"
          >
            <img
              style={styles.logo}
              src={github}
              alt="Github Link"
              class="img"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/adam-kuemmel-74a3421b6/"
            target="no_blank"
            style={styles.Alogo}
          >
            <img
              src={linkedin}
              style={styles.logo}
              alt="LinkedIn"
              class="img"
            />
          </a>
        </div>
      </div>
      <div>
        <form
          style={styles.form}
          id="bhide"
          action="https://mailthis.to/adamkuemmel@gmail.com"
          method="POST"
          encType="multipart/form-data"
        >
          <input
            style={styles.transBox}
            type="text"
            name="name"
            placeholder="Your name"
          />
          <input
            style={styles.transBox}
            type="email"
            name="_replyto"
            placeholder="Your email"
          />
          <textarea
            style={styles.transBox}
            name="message"
            placeholder="Enter your message here"
          ></textarea>

          <input type="hidden" name="_subject" value="Contact form submitted" />
          <input type="hidden" name="_after" value="https://localhost:3000" />
          <input type="hidden" name="_honeypot" value="" />
          <input type="hidden" name="_confirmation" value="" />
          <input type="submit" style={styles.subBox} value="Send" />
        </form>
      </div>
    </div>
  );
}
