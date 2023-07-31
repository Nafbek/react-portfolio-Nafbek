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
    marginTop: "6rem",
    fontWeight: "bold",
    color: "rgb(17, 58, 23)",
    backgroundColor: "rgb(144, 184, 15)",
  },
  iconsize: {
    width: "1rem",
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
              <a className="project-link-container" href="#">
                <div
                  className="p-3 project-box project-box-height"
                  style={style.project1}
                >
                  <a
                    className="name-emoji-link"
                    href="https://jennastrom.github.io/Beer-and-a-show/"
                  >
                    Beer and A Show
                  </a>
                  <a
                    className="name-emoji-link"
                    href="https://github.com/JennaStrom/Beer-and-a-show"
                  >
                    <img
                      src="images/github-mark-white.png"
                      style={style.iconsize}
                    />
                  </a>
                  <p className="links-paragraph" style={style.description}>
                    Frontend
                  </p>
                </div>
              </a>
            </div>

            <div className="col-md mb-3">
              <a className="project-link-container" href="#">
                <div
                  className="p-3 project-box project-box-height"
                  style={style.project2}
                >
                  <a
                    className="name-emoji-link"
                    href="https://hidden-lake-38607-a47be9049bc1.herokuapp.com/"
                  >
                    Nutrition Ninja
                  </a>
                  <a
                    className="name-emoji-link"
                    href="https://github.com/JennaStrom/nutrition-ninja"
                  >
                    <img
                      src="images/github-mark-white.png"
                      style={style.iconsize}
                    />
                  </a>
                  <p className="links-paragraph" style={style.description}>
                    Full Stack
                  </p>
                </div>
              </a>
            </div>

            <div className="col-md mb-3">
              <a className="project-link-container" href="#">
                <div
                  className="p-3 project-box project-box-height"
                  style={style.project3}
                >
                  <a
                    className="name-emoji-link"
                    href="https://nafbek.github.io/weather-dashboard-5days-forecast/"
                  >
                    Weather Dashboard
                  </a>
                  <a
                    className="name-emoji-link"
                    href="https://github.com/Nafbek/weather-dashboard-5days-forecast"
                  >
                    <img
                      src="images/github-mark-white.png"
                      style={style.iconsize}
                    />
                  </a>
                  <p className="links-paragraph" style={style.description}>
                    Frontend
                  </p>
                </div>
              </a>
            </div>

            <div className="col-md mb-3">
              <a className="project-link-container" href="#">
                <div
                  className="p-3 project-box project-box-height"
                  style={style.project4}
                >
                  <a
                    className="name-emoji-link"
                    href="https://nafbek.github.io/password-generator-challenge3/"
                  >
                    Password Generator
                  </a>
                  <a
                    className="name-emoji-link"
                    href="https://github.com/Nafbek/password-generator-challenge3/settings/pages"
                  >
                    <img
                      src="images/github-mark-white.png"
                      style={style.iconsize}
                    />
                  </a>
                  <p className="links-paragraph" style={style.description}>
                    Frontend
                  </p>
                </div>
              </a>
            </div>
            <div className="col-md mb-3">
              <a className="project-link-container" href="#">
                <div
                  className="p-3 project-box project-box-height"
                  style={style.project5}
                >
                  <a
                    className="name-emoji-link"
                    href="https://nafbek.github.io/work-day-scheduler/"
                  >
                    Work Day Scheduler
                  </a>
                  <a
                    className="name-emoji-link"
                    href="https://github.com/Nafbek/work-day-scheduler"
                  >
                    <img
                      src="images/github-mark-white.png"
                      style={style.iconsize}
                    />
                  </a>
                  <p className="links-paragraph" style={style.description}>
                    Frontend
                  </p>
                </div>
              </a>
            </div>

            <div className="col-md mb-3">
              <a className="project-link-container" href="#">
                <div
                  className="p-3 project-box project-box-height"
                  style={style.project6}
                >
                  <a className="name-emoji-link" href="#">
                    FlySetter
                  </a>
                  <a className="name-emoji-link" href="#">
                    <img
                      src="images/github-mark-white.png"
                      style={style.iconsize}
                    />
                  </a>
                  <p className="links-paragraph" style={style.description}>
                    MERN Stack
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
