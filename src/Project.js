import React from "react";
import "./Project.css";
import Project1 from './img/mysite.png';
import Project2 from './img/toDoList.png';
import Project3 from './img/portfolio-3.jpg';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">My Portfolio</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4>
                     <a target="blank" href="https://ibrahim-mohamed-1b223.web.app/" className="project__btn">Live show</a>
                     <a target="blank" href="https://github.com/ibrahim-mohamed-rezk/portfolio" className="project__btn">github link</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">toDoList app</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4>
                     <a target='blank' href="https://todoapp-675dd.web.app/" className="project__btn">View Details</a>
                     <a target="blank" href="https://github.com/ibrahim-mohamed-rezk/toDoList.git" className="project__btn">github link</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4>
                     <a href="#Home" className="project__btn">View Details</a>
                     <a target="blank" href="#Home" className="project__btn">github link</a>
                     </div>
                 </div>
             </div>
           </div>
       </div>
    </div>
  );
}

export default Project;
