import React, { useState } from "react";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import LightboxExample from "./components/pages/Lightbox";

import TestNav from "./components/TestNav";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* <TestNav /> */}

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
          <LightboxExample />
        </Route>
        <Route exact path="/project">
          <Project />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </div>
    </Router>
  );
}

export default App;
