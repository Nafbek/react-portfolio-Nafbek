import React from "react";

const style = {
  project1: {
    // background:
    //   "url('https://user-images.githubusercontent.com/123525191/248143283-fc89af11-22a9-494c-a692-b8ceb876f018.png')",
  },
  project2: {
    background: "url('/images/project2.png')",

    backgroundSize: "cover",
    // paddingBottom: '5rem'

    // background: "green",
  },
  projectContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
};

export default function Projects() {
  return (
    <div className="container">
      <h2 className="heading2">Portfolio</h2>
      <div className="container">
        <div id="portfolio" className="row">
          <div
            id="project1-bgrd"
            className="col-md-6 col-sm-12 px-2 mb-2"
            style={style.project1}
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
            className="col-md-6 col-sm-12 px-2 mb-2 "
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
          <div id="project3-bgrd" className="col-md-6 col-sm-12 px-2 mb-2">
            <a href="#">
              <h3>project name 3</h3>
              <span></span>
            </a>
            <a href="#">🐙</a>
            <p>fullstack....</p>
          </div>

          <div id="project4-bgrd" className="col-md-6 col-sm-12 px-2 mb-2">
            <a href="#">
              <h3>project name 4</h3>
              <span></span>
            </a>
            <a href="#">🐙</a>
            <p>fullstack....</p>
          </div>

          <div id="project5-bgrd" className="col-md-6 col-sm-12 px-2 mb-2">
            <a href="#">
              <h3>project name 5</h3>
              <span></span>
            </a>
            <a href="#">🐙</a>
            <p>fullstack....</p>
          </div>
          <div id="project6-bgrd" className="col-md-6 col-sm-12 px-2 mb-2">
            <a href="#">
              <h3>project name 6</h3>
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
