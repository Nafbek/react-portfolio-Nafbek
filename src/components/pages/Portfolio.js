import React from "react";

const style = {
  project1: {
    background: "url('/images/project1.png')",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
  project2: {
    background: "url('/images/project2.png')",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
  project3: {
    background: "url('/images/project3.png')",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
  project4: {
    background: "url('/images/project4.jpg')",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
  project5: {
    background: "url('/images/project5.jpg')",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
  project6: {
    background: "url('/images/project6.jpg')",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
  description: {
    marginTop: "3rem",
    fontWeight: "bold",
    color: "green",
  },
};

export default function Projects() {
  return (
    <>
      <div className="container">
        <h2 className="heading2 mb-3">Portfolio</h2>
        <div className="projects-container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
            <div className="col-md mb-3">
              <a></a>

              <div className="p-3 project-box-height" style={style.project1}>
                <div className="project-link-container">
                  <a href="https://jennastrom.github.io/Beer-and-a-show/">
                    <h3 className="name-emoji-link">Beer and A Show</h3>
                  </a>
                  <a
                    className="name-emoji-link"
                    href="https://github.com/JennaStrom/Beer-and-a-show"
                  >
                    🐙
                  </a>
                </div>

                <p style={style.description}>Frontend</p>
              </div>
            </div>

            <div className="col-md mb-3">
              <div className="p-3 project-box-height" style={style.project2}>
                <a href="https://hidden-lake-38607-a47be9049bc1.herokuapp.com/">
                  <h3 className="name-emoji-link">Nutrition Ninja</h3>
                  <span></span>
                </a>
                <a
                  className="name-emoji-link"
                  href="https://github.com/JennaStrom/nutrition-ninja"
                >
                  🐙
                </a>
                <p style={style.description}>Full Stack</p>
              </div>
            </div>

            <div className="col-md mb-3">
              <div className="p-3 project-box-height " style={style.project3}>
                <a href="https://nafbek.github.io/weather-dashboard-5days-forecast/">
                  <h3 className="name-emoji-link">Weather Dashboard</h3>
                  <span></span>
                </a>
                <a
                  className="name-emoji-link"
                  href="https://github.com/Nafbek/weather-dashboard-5days-forecast"
                >
                  🐙
                </a>
                <p style={style.description}>Frontend</p>
              </div>
            </div>
            <div className="col-md mb-3">
              <div className="p-3 project-box-height" style={style.project4}>
                <a href="https://nafbek.github.io/password-generator-challenge3/">
                  <h3 className="name-emoji-link">Password Generator</h3>
                </a>
                <a
                  className="name-emoji-link"
                  href="https://github.com/Nafbek/password-generator-challenge3/settings/pages"
                >
                  🐙
                </a>
                <p style={style.description}>Frontend</p>
              </div>
            </div>
            <div className="col-md mb-3">
              <div className="p-3 project-box-height" style={style.project5}>
                <a href="Nutrition Ninja (hidden-lake-38607-a47be9049bc1.herokuapp.com)">
                  <h3 className="name-emoji-link">555555555555</h3>
                  <span></span>
                </a>
                <a
                  className="name-emoji-link"
                  href="https://github.com/JennaStrom/nutrition-ninja"
                >
                  🐙
                </a>
                <p>Full Stack</p>
              </div>
            </div>
            <div className="col-md mb-3">
              <div className="p-3 project-box-height" style={style.project6}>
                <a href="Nutrition Ninja (hidden-lake-38607-a47be9049bc1.herokuapp.com)">
                  <h3 className="name-emoji-link">66666666666666</h3>
                  <span></span>
                </a>
                <a
                  className="name-emoji-link"
                  href="https://github.com/JennaStrom/nutrition-ninja"
                >
                  🐙
                </a>
                <p>Full Stack</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
