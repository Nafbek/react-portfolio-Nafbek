import React from "react";

export default function Contact(props) {
  return (
    <>
      <div className="container">
        <h2 className="heading2 py-3">Contact</h2>
        <div className="contact-container ms-4">
          <form className="my-1">
            <div>
              <label htmlFor="firstName" className="form-label">
                First Name:
              </label>
              <input
                className="form-control"
                required
                type="text"
                name="firstName"
                value={props.firstName}
                onChange={props.handleInputChange}
                placeholder="First Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="LastName" className="form-label">
                Last Name:
              </label>
              <input
                className="form-control"
                required
                type="text"
                name="lastName"
                value={props.lastName}
                onChange={props.handleInputChange}
                placeholder="Last Name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address:{" "}
              </label>
              <input
                className="form-control"
                required
                type="text"
                name="email"
                value={props.email}
                onChange={props.handleInputChange}
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:{" "}
              </label>
              <textarea
                required
                className="form-control"
                name="message"
                value={props.message}
                onChange={props.handleInputChange}
              />
            </div>
          </form>
          <div>
            <button
              type="button"
              onClick={props.handleFormSubmit}
              className="contact-submit-btn"
            >
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
