import React from "react";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";

const styles = {
  logo1: {
    maxWidth: "15%",
    display: "block",
    marginLeft: "95%",
    marginRight: "",
  },
  logo2: {
    maxWidth: "10%",
    display: "block",
    marginLeft: "25%",
    marginRight: "",
  },
  logoCon: { flexDirection: "row", display: "flex", marginBottom: "3%" },

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
  form: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "column",
    maxWidth: "20rem",
    backgroundColor: "#edf1cf",
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
          <a href="https://github.com/AdamKuemmel" target="no_blank">
            <img
              style={styles.logo1}
              src={github}
              alt="Github Link"
              class="img"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/adam-kuemmel-74a3421b6/"
            target="no_blank"
          >
            <img
              src={linkedin}
              style={styles.logo2}
              alt="LinkedIn"
              class="img"
            />
          </a>
        </div>
      </div>
      <div>
        <form
          style={styles.form}
          action="https://mailthis.to/adamkuemmel@gmail.com"
          method="POST"
          encType="multipart/form-data"
        >
          <input type="text" name="name" placeholder="Your name" />
          <input type="email" name="_replyto" placeholder="Your email" />
          <textarea
            name="message"
            placeholder="Enter your message here"
          ></textarea>

          <input type="hidden" name="_subject" value="Contact form submitted" />
          <input type="hidden" name="_after" value="https://localhost:3000" />
          <input type="hidden" name="_honeypot" value="" />
          <input type="hidden" name="_confirmation" value="" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
