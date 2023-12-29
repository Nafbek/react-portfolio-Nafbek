import React from "react";

const style = {
  aboutContainer: {
    width: "80%",
  },
  image: {
    width: "5rem",
    borderRadius: "2rem",
  },
};

export default function AboutMe() {
  return (
    <>
      <div id="aboutMe" className="container">
        <h2 className="heading2 py-3">About Me</h2>
        <img
          src={process.env.PUBLIC_URL + "/images/profile-picture.jpg"}
          style={style.image}
          alt="Nafbek's-profile"
        />
        <div className="">
          <div style={style.aboutContainer}>
            <p className="pt-3">
              Proficiently skilled in front-end technologies like JavaScript,
              jQuery, React, TypeScript, HTML5, CSS, Bootstrap, Tailwind, as
              well as back-end technologies such as Nodejs, Expressjs, MySQL and
              MongoDB. Additionally, I possess a profound understanding of REST
              APIs, Heroku, Git for version control, JSON Web Token, Webpack,
              and Test-Driven Development using JEST.
            </p>
            <p className="">
              With expertise in full stack web development, combined with a
              strong business and project management foundation, and with fast
              learning abilities, problem-solving skills, and critical thinking
              qualities, prepared to contribute to cutting-edge software
              development projects and drive organizational success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
