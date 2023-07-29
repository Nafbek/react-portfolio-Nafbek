import React from "react";

export default function Contact(props) {
  return (
    <>
      <div className="container">
        <h2 className="heading2 py-3">Contact</h2>
        <div id="contact">
          <form className="my-2">
            <div className="py-3 my-3">
              <div>
                <label>First Name:</label>
                <input
                  className=""
                  required
                  type="text"
                  name="firstName"
                  value={props.firstName}
                  onChange={props.handleInputChange}
                  placeholder="firstName name"
                />
              </div>
              <div>
                <label>Last Name:</label>
                <input
                  className=""
                  required
                  type="text"
                  name="lastName"
                  value={props.lastName}
                  onChange={props.handleInputChange}
                  placeholder="lastName"
                />
              </div>
            </div>
            <div>
              <label>Email Address: </label>
              <input
                className=""
                required
                type="text"
                name="email"
                value={props.email}
                onChange={props.handleInputChange}
                placeholder="email"
              />
            </div>
            <div>
              <label>Message: </label>
              <textarea
                required
                name="message"
                value={props.message}
                onChange={props.handleInputChange}
              />
            </div>
            {props.validateInput()}
          </form>
          <div>
            <button type="button" onClick={props.handleFormSubmit} className="">
              Submit
            </button>
          </div>
          {props.errorMessage && <p>{props.errorMessage}</p>}
          {props.successMessage && <p>{props.successMessage}</p>}
        </div>
      </div>
    </>
  );
}
