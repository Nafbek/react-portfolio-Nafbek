import React from "react";

export default function Contact(props) {
  retutn(
    <>
      <div>
        <form>
          {/* All inputs are required */}
          <div>
            <div>
              <label>First Name:</label>
              <input
                className=""
                type="text"
                name="contact"
                value={props.firstName}
                onChange={}
                placeholder="firstName name"
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                className=""
                type="text"
                name="contact"
                value={props.lastName}
                onChange={}
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
              onChange={}
              placeholder="email"
            />
          </div>
          <div>
            <label>Message: </label>
            <textarea />
            <button className="">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
