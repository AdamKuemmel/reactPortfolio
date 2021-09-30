import React from "react";

export default function Project() {
  return (
    <div>
      <h1>Recent Projects</h1>
      <article class="port-item">
        <h4>theVibeForecast</h4>
        <a
          href="https://adamkuemmel.github.io/theVibeForecast/"
          target="_blank"
        >
          <img src="assets/images/vibeportfolio.png" alt="vibeForcast" />
        </a>
      </article>
      <article class="port-item">
        <h4>sideSwipe</h4>
        <a href="https://thawing-mesa-73583.herokuapp.com/" target="_blank">
          <img src="public/images/sidewipe_SC" alt="sideSwipe" />
        </a>
      </article>
      <article class="port-item">
        <h4>input proj 3 here</h4>
        <a href="https://evening-atoll-81356.herokuapp.com/" target="_blank">
          <img src="./assets/images/noteTaker_SC.png" alt="notetakerproj" />
        </a>
      </article>
    </div>
  );
}
