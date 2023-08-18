import React from "react";

const style = {
  project1: {
    background: `url(${process.env.PUBLIC_URL}/images/project1.png)`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
  project2: {
    background: `url(${process.env.PUBLIC_URL}/images/project2.png)`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
  project3: {
    background: `url(${process.env.PUBLIC_URL}/images/abc-goat.png)`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
  project4: {
    background: `url(${process.env.PUBLIC_URL}/images/Animation4.gif)`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
  project5: {
    background: `url(${process.env.PUBLIC_URL}/images/Animation-scheduler.gif)`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
  project6: {
    background: `url(${process.env.PUBLIC_URL}/images/note-taker.png)`,
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
              <div
                className="p-3 project-box project-box-height"
                style={style.project1}
              >
                <a
                  className="name-emoji-link"
                  href="https://jennastrom.github.io/Beer-and-a-show/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Beer and A Show
                </a>
                <a
                  className="name-emoji-link"
                  href="https://github.com/JennaStrom/Beer-and-a-show"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/github-mark-white.png"
                    }
                    style={style.iconsize}
                    alt="GitHub icon"
                  />
                </a>
                <p className="links-paragraph" style={style.description}>
                  Frontend
                </p>
              </div>
            </div>

            <div className="col-md mb-3">
              <div
                className="p-3 project-box project-box-height"
                style={style.project2}
              >
                <a
                  className="name-emoji-link"
                  href="https://hidden-lake-38607-a47be9049bc1.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nutrition Ninja
                </a>
                <a
                  className="name-emoji-link"
                  href="https://github.com/JennaStrom/nutrition-ninja"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/github-mark-white.png"
                    }
                    style={style.iconsize}
                    alt="GitHub icon"
                  />
                </a>
                <p className="links-paragraph" style={style.description}>
                  Full Stack
                </p>
              </div>
            </div>

            <div className="col-md mb-3">
              <div
                className="p-3 project-box project-box-height"
                style={style.project3}
              >
                <a
                  className="name-emoji-link"
                  href="https://abc-goat-ddaec4f82441.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ABC GOAT
                </a>
                <a
                  className="name-emoji-link"
                  href="https://github.com/Nafbek/react-portfolio-Nafbek"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/github-mark-white.png"
                    }
                    style={style.iconsize}
                    alt="GitHub icon"
                  />
                </a>
                <p className="links-paragraph" style={style.description}>
                  Frontend
                </p>
              </div>
            </div>

            <div className="col-md mb-3">
              <div
                className="p-3 project-box project-box-height"
                style={style.project4}
              >
                <a
                  className="name-emoji-link"
                  href="https://nafbek.github.io/password-generator-challenge3/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Password Generator
                </a>
                <a
                  className="name-emoji-link"
                  href="https://github.com/Nafbek/password-generator-challenge3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/github-mark-white.png"
                    }
                    style={style.iconsize}
                    alt="GitHub icon"
                  />
                </a>
                <p className="links-paragraph" style={style.description}>
                  Frontend
                </p>
              </div>
            </div>
            <div className="col-md mb-3">
              <div
                className="p-3 project-box project-box-height"
                style={style.project5}
              >
                <a
                  className="name-emoji-link"
                  href="https://nafbek.github.io/work-day-scheduler/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Work Day Scheduler
                </a>
                <a
                  className="name-emoji-link"
                  href="https://github.com/Nafbek/work-day-scheduler"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/github-mark-white.png"
                    }
                    style={style.iconsize}
                    alt="GitHub icon"
                  />
                </a>
                <p className="links-paragraph" style={style.description}>
                  Frontend
                </p>
              </div>
            </div>

            <div className="col-md mb-3">
              <div
                className="p-3 project-box project-box-height"
                style={style.project6}
              >
                <a
                  className="name-emoji-link"
                  href="https://note-taker-expree-app.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Note Taker
                </a>
                <a
                  className="name-emoji-link"
                  href="https://github.com/Nafbek/note-taker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/github-mark-white.png"
                    }
                    style={style.iconsize}
                    alt="GitHub icon"
                  />
                </a>
                <p className="links-paragraph" style={style.description}>
                  Full Stack
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
