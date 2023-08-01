import React from "react";

const style = {
  footerBgd: {
    background: "rgb(13, 40, 36)",
  },
  anchorDecor: {
    textDecoration: "none",
  },
  iconsize: {
    width: "1rem",
    margin: ".5rem",
  },
};

export default function Footer() {
  return (
    <footer className="" style={style.footerBgd}>
      <div className="container text-center p-4">
        <span role="img" aria-label="link">
          <a
            href="https://www.linkedin.com/in/nafbek-s-kebede-10619b164/"
            target="_blank"
            rel="noopener noreferrer"
            style={style.anchorDecor}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/linkedIn.jpg"}
              alt="LinkedIn icon"
              style={style.iconsize}
            />
          </a>
        </span>
        <span role="img" aria-label="octopus">
          <a
            href="https://github.com/nafbek"
            target="_blank"
            rel="noopener noreferrer"
            style={style.anchorDecor}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/github-mark-white.png"}
              alt="GitHub icon"
              style={style.iconsize}
            />
          </a>
        </span>
      </div>
    </footer>
  );
}
