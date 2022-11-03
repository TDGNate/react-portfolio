import React, { useState } from 'react';

// Components 
import ProjectCard from "../ProjectCard";

// Styles 
import "../../styles/moreProjects.css";

// Data 
import ProjectsData from "../../ProjectsData";

const MoreProjects = () => {

  const [displayedElCount, setDisplayElCount] = useState(3);

  function loadMore() {
    setDisplayElCount(displayedElCount + 3)
  }

  const slice = ProjectsData.slice(0, displayedElCount);

  return (
    <div id="moreProjects" className="more-projects-page">
      
      <div className="more-projects-filter"></div>

      <div className="container">
        <div className="more-projects-empty-space"></div>
        <h1>My Projects</h1>
        <p className="more-projects-sub-text">Here's all my backend, frontend, and full stack projects :)</p>
        <div className="more-projects-project-container">

          {/* Pull all projects and displaying them  */}
          {slice.map((item, index) => {
            return (
              <ProjectCard
              key={index}
              title={item.cardTitle}
              thumbNail={item.cardThumbnail}
              description={item.cardDesc}
              techStack={item.cardTechStack}
              btns={item.cardBtns}
              />
            )
          })}

          {/* The show more button  */}
          <div className="show-more-projects-container">
          <button className="show-more-projects" onClick={() => loadMore()}>Load More</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default MoreProjects;