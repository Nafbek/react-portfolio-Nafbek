import React from "react";

const style = {
  aboutBgd: {
    background: "purple",
  },
};

export default function AboutMe() {
  return (
    <div className="" style={style.aboutBgd}>
      <div id="aboutMe" className="container border ms-5">
        <h2>About Me</h2>
        <img src="" alt="Nafbek's profile picture" />
        <p>
          With a strong business and project management foundation, combined
          with evolving expertise in full stack web development, computer
          science, and with fast learning abilities, problem-solving skills, and
          critical thinking qualities, prepared to contribute to cutting-edge
          software development projects and drive organizational success.
        </p>
        <p>
          Proficiently skilled in JavaScript, database management, API
          integration, and front-end frameworks, possess the competencies
          essential for excelling in demanding professional environments.
        </p>
      </div>
    </div>
  );
}
