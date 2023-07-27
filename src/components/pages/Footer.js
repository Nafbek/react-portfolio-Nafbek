import React from "react";

const style = {
  footerBgd: {
    background: "orange",
    marginTop: "auto",
  },
};

export default function Footer() {
  return (
    <footer className="" style={style.footerBgd}>
      <div className="container-fluid text-center p-5">
        <span role="img" aria-label="link">
          <a href="https://www.linkedin.com/in/nafbek-s-kebede-10619b164/">
            🔗
          </a>
        </span>
        <span role="img" aria-label="octopus">
          <a href="https://github.com/nafbek"> 🐙 </a>
        </span>

        {/* <span role="img" aria-label="twitter">
            
          </span> */}
      </div>
    </footer>
  );
}
