import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

import Header from "./components/header";
import Section from "./components/cardSection";
import Contact from "./components/contact";

function App() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

  return (
    <>
      <Header />
      <Section icon="fa fa-building" title="About the Company" text={text} />
      <hr />
      <Section icon="fa fa-globe" title="Our Values" text={text} />
      <hr />
      <Section icon="fa fa-university" title="Our Mission" text={text} />
      <Contact />
    </>
  );
}

export default App;


