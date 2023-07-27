import React from "react";

const style = {
  footerBgd: {
    background: "rgb(13, 40, 36)",
  },
  anchorDecor: {
    textDecoration: "none",
  },
};

export default function Footer() {
  return (
    <footer className="" style={style.footerBgd}>
      <div className="container text-center p-4">
        <span role="img" aria-label="link">
          <a
            href="https://www.linkedin.com/in/nafbek-s-kebede-10619b164/"
            style={style.anchorDecor}
          >
            🔗
          </a>
        </span>
        <span role="img" aria-label="octopus">
          <a href="https://github.com/nafbek" style={style.anchorDecor}>
            {" "}
            🐙{" "}
          </a>
        </span>
      </div>
    </footer>
  );
}
