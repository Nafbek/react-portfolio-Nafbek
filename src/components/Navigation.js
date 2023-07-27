import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation({ handlePageChange }) {
  return (
    <div className=" ">
      <div className="">
        <h1>Nafbek</h1>
      </div>
      <div>
        <nav className="">
          <ul className="">
            <li className="">
              <a href="#aboutMe" onClick={() => handlePageChange("AboutMe")}>
                About Me
              </a>
            </li>
            <li className="">
              <a
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li className="">
              <a href="#contact" onClick={() => handlePageChange("Contact")}>
                Contact
              </a>
            </li>
            <li className="">
              <a href="#resume" onClick={() => handlePageChange("Resume")}>
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

// export default function Navigation({ handlePageChange }) {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="$green-800">
//         <h1 className="navbar-brand">Nafbek</h1>
//       </div>
//       <div className="container-fluid">
//         <div className="collapse divbar-collapse">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a
//                 className="nav-link"
//                 href="#aboutMe"
//                 onClick={() => handlePageChange("AboutMe")}
//               >
//                 About Me
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 className="nav-link"
//                 href="#portfolio"
//                 onClick={() => handlePageChange("Portfolio")}
//               >
//                 Portfolio
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 className="nav-link"
//                 href="#contact"
//                 onClick={() => handlePageChange("Contact")}
//               >
//                 Contact
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 className="nav-link"
//                 href="#resume"
//                 onClick={() => handlePageChange("Resume")}
//               >
//                 Resume
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
