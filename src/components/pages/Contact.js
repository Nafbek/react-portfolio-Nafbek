import React from "react";

export default function Contact(props) {
  retutn(
    <>
      <div id="contact">
        <form>
          {/* All inputs are required */}
          <div>
            <div>
              <label>First Name:</label>
              <input
                className=""
                type="text"
                name="firstName"
                value={props.firstName}
                onChange={() => handleInputChange}
                placeholder="firstName name"
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                className=""
                type="text"
                name="lastName"
                value={props.lastName}
                onChange={() => handleInputChange}
                placeholder="lastName"
              />
            </div>
          </div>
          <div>
            <label>Email Address: </label>
            <input
              className=""
              type="text"
              name="email"
              value={props.email}
              onChange={() => handleInputChange}
              placeholder="email"
            />
          </div>
          <div>
            <label>Message: </label>
            <textarea
              name="message"
              value={props.message}
              onClick={() => handleFormSubmit}
            />
            <button type="button" className="">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
