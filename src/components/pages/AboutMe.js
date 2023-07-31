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
          src="/images/profile-picture.jpg"
          style={style.image}
          alt="Nafbek's profile picture"
        />
        <div className="">
          <div style={style.aboutContainer}>
            <p className="pt-3">
              With a strong business and project management foundation, combined
              with evolving expertise in full stack web development, computer
              science, and with fast learning abilities, problem-solving skills,
              and critical thinking qualities, prepared to contribute to
              cutting-edge software development projects and drive
              organizational success.
            </p>
            <p className="">
              Proficiently skilled in JavaScript, database management, API
              integration, and front-end frameworks, possess the competencies
              essential for excelling in demanding professional environments.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
