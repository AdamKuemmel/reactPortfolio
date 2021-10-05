import React from "react";

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
    color: "#edf1cf",
  },
};
export default function Contact() {
  return (
    <div>
      <div>
        <h1 style={styles.title}>Contact Page</h1>
        <p style={styles.words}>
          If you would like to contact me, here are a few ways to do so. or
          Linkedin
        </p>
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
