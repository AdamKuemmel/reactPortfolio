import React from "react";
import logo from "../images/logoAK.png";

const styles = {
  navBar: {
    display: "flex",
    backgroundColor: "#0c0c0c",
  },
  navbarNav: {},
  buttons: {
    // marginLeft: "70%",
    // marginRight: "5%",
    color: "#edf1cf",
  },
  ak: {
    marginLeft: "10%",
  },
  img: {
    maxHeight: "13vh",
  },
  buttonText: {
    color: "#edf1cf",
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav style={styles.navBar} class="navbar navbar-expand-lg navbar-dark ">
      <a
        class="navbar-brand"
        onClick={() => handlePageChange("Home")}
        href="#home"
      ></a>
      <img
        src={logo}
        onClick={() => handlePageChange("Home")}
        style={styles.img}
      />
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse"
        id="navbarNav"
        style={styles.buttons}
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              style={styles.buttonText}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#project"
              onClick={() => handlePageChange("Project")}
              style={styles.buttonText}
              className={
                currentPage === "Project" ? "nav-link active" : "nav-link"
              }
            >
              Work
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              style={styles.buttonText}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
