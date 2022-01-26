import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import LightboxExample from "./pages/Lightbox";
import TestNav from "./TestNav";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return (
        <Home currentPage={currentPage} handlePageChange={handlePageChange} />
      );
    }
    if (currentPage === "About") {
      return (
        <>
          <About />
          <LightboxExample />
        </>
      );
    }
    if (currentPage === "Project") {
      return <Project />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* <TestNav /> */}
      {renderPage()}
    </div>
  );
}
