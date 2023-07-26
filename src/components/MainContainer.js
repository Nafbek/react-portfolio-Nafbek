import React, { useState } from "react";
// import {
//   AboutMe,
//   Contact,
//   Portfolio,
//   Footer,
//   Resume,
// } from "../components/pages";
import AboutMe from "../components/pages/AboutMe";
import Contact from "../components/pages/Contact";
import Portfolio from "../components/pages/Portfolio";
import Footer from "../components/pages/Footer";
import { Resume } from "../components/pages/Resume";

import Navigation from "./Navigation";
// import tailwind

export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  if (currentPage === "AboutMe") {
    return (<AboutMe />), (<Footer />);
  } else if (currentPage === "Contact") {
    return (<Contact />), (<Footer />);
  } else if (currentPage === "Portfolio") {
    return (<Portfolio />), (<Footer />);
  } else if (currentPage === "Resume") {
    return (
      <>
        <Resume />
        <Footer />
      </>
    );
  }
  function validInput() {
    const reg = `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`.test();

    if (!email) {
      return <p>Email is required</p>;
    }
    if (email !== reg) {
      return <p>Please re-enter your email</p>;
    }
    if (!firstName && !lastName) {
      return <p>Name is required!</p>;
    }
    if (!message) {
      return <p>Message is required!</p>;
    }
  }
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // if()
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    return <p>You successfully submitted your message!</p>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <div className="main-container">
        <Navigation
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          handlePageChange={handlePageChange}
          validInput={validInput}
        />
      </div>
    </>
  );
}
