import React from "react";

const style = {
  project1: {
    background:
      "url('https://user-images.githubusercontent.com/123525191/248143283-fc89af11-22a9-494c-a692-b8ceb876f018.png')",
  },
  project2: {
    background: "url('/images/project2.png')",

    backgroundSize: "cover",
    // background: "green",
  },
  bodyBgd: {
    background: "indigo",
  },
  cardBgd: {
    background: "orange",
  },
};

export default function Projects() {
  return (
    <div className="container-fluid " style={style.bodyBgd}>
      <h2 className="ms-5">Portfolio</h2>
      <div className="container border  ms-5">
        <div id="portfolio" className="row">
          <div
            id="project1-bgrd"
            className="col-md-6 border m-1"
            style={style.cardBgd}
          >
            <span>
              <a href="https://jennastrom.github.io/Beer-and-a-show/ ">
                <h3>Beer and A Show</h3>
              </a>
            </span>

            <span role="img" aria-label="octopus">
              <a href="https://github.com/JennaStrom/Beer-and-a-show"> 🐙 </a>
            </span>
            <p>Frontend</p>
          </div>

          <div
            id="project2-bgrd"
            // style={style.project1}
            className="col-md-6 border m-1"
            style={style.project2}
          >
            <a href="Nutrition Ninja (hidden-lake-38607-a47be9049bc1.herokuapp.com)">
              <h3>Nutrition Ninja</h3>
              <span></span>
            </a>
            <a href="https://github.com/JennaStrom/nutrition-ninja">🐙</a>
            <p>Full Stack</p>
          </div>
        </div>
        <div id="portfolio" className="row">
          <div id="project3-bgrd" className="col-md-6 border m-1">
            <a href="#">
              <h3>project name 3</h3>
              <span></span>
            </a>
            <a href="#">🐙</a>
            <p>fullstack....</p>
          </div>

          <div id="project4-bgrd" className="col-md-6 border m-1">
            <a href="#">
              <h3>project name 4</h3>
              <span></span>
            </a>
            <a href="#">🐙</a>
            <p>fullstack....</p>
          </div>
        </div>
      </div>
    </div>
  );
}
