import React from "react";

export default function Resume() {
  return (
    <div>
      <div className="container">
        <h2 className="py-3">Resume</h2>
        <p>
          Download {""}
          <a
            href="https://docs.google.com/document/d/16LnhgQ-QQ2N2bM9kBwz4Sw38bwdA6OJng9C_HgQOkhM/edit"
            alt="resume document"
          >
            my resume
          </a>
        </p>
        <h3>Frontend</h3>
        <ul>
          <li>React.js</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
          <li>HTML</li>
          <li>jQuery</li>
        </ul>
        <h3>Backend</h3>
        <ul>
          <li>SQL</li>
          <li>NoSQL</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Sequelize.sj</li>
          <li>Express.js</li>
        </ul>
      </div>
    </div>
  );
}
