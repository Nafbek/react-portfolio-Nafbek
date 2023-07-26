import React from "react";
// import { AboutMe, Contact, Footer, Portfolio, Resume } from "./pages";
// import tailwind

export default function Navigation() {
  return (
    <>
      <div className="">
        <div className="">
          <h1>Nafbek Kebede</h1>
        </div>
        <div>
          <nav className="">
            <ul className="">
              <li className="">
                <a href="#aboutMe" onClick={() => handlePageChang("AboutMe")}>
                  About Me
                </a>
              </li>
              <li className="">
                <a
                  href="#portfolio"
                  onClick={() => handlePageChang("Portfolio")}
                >
                  Portfolio
                </a>
              </li>
              <li className="">
                <a href="#contact" onClick={() => handlePageChang("Contact")}>
                  Contact
                </a>
              </li>
              <li className="">
                <a href="#resume" onClick={() => handlePageChang("Resume")}>
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
