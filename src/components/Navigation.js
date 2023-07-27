import "../App.css";

export default function Navigation({ handlePageChange, currentPage }) {
  return (
    <div className="headerContainer">
      <div className="headerName">
        <h1>Nafbek</h1>
      </div>
      <div className="navDiv">
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a
                href="#aboutMe"
                className={`nav-link ${
                  currentPage === "AboutMe" ? "active" : ""
                }`}
                onClick={() => handlePageChange("AboutMe")}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                className={`nav-link ${
                  currentPage === "Portfolio" ? "active" : ""
                }`}
                onClick={() => handlePageChange("Portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className={`nav-link ${
                  currentPage === "Contact" ? "active" : ""
                }`}
                onClick={() => handlePageChange("Contact")}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                className={`nav-link ${
                  currentPage === "Resume" ? "active" : ""
                }`}
                onClick={() => handlePageChange("Resume")}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
