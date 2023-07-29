import React, { useState } from "react";

import AboutMe from "../components/pages/AboutMe";
import Contact from "../components/pages/Contact";
import Portfolio from "../components/pages/Portfolio";
import Footer from "../components/pages/Footer";
import Resume from "../components/pages/Resume";

import Navigation from "./Navigation";

export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const pageRender = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    } else if (currentPage === "Contact") {
      return (
        <Contact
          firstName={firstName}
          lastName={lastName}
          email={email}
          message={message}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
          errorMessage={errorMessage}
          successMessage={successMessage}
          validateInput={validateInput}
        />
      );
    } else if (currentPage === "Portfolio") {
      return <Portfolio />;
    } else if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  function validateInput() {
    const reg = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/;

    if (!firstName && !lastName) {
      return "Name is required!";
    }
    if (!email) {
      return "Email is required";
    }
    if (!reg.test(email)) {
      return "Invalid email, please re-enter";
    }
    if (!message) {
      return "Message is required!";
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

    const validationMessage = validateInput();
    if (validationMessage) {
      setErrorMessage(validationMessage);
      setSuccessMessage("");
    } else {
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setErrorMessage("");
      setSuccessMessage("You successfully submitted your message!");
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <div className="main-container">
        <Navigation
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          validateInput={validateInput}
        />

        <div className="content-section">{pageRender()}
        
        </div>
        <Footer />
      </div>
    
          
  
    </>
  );
}
