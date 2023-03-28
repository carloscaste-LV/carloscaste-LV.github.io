import React from "react";
import Button from './Button.js';
import SliceImg from "./SliceImg.js";
import '../static/ProjectSection.css';



const projects=[
  {
    label:"Lidar",
    imgFoot:"distance mapping from a static reference point",
    description:"El proyecto de hydroponia se sostiene sobres tres pilares tecnicos principales, electronica, programacion y el el empleo de concimientos agronos para completar el proyecto, este consite en tomar los datos dede sensores de temperatura y ph para pasarlos a un servidor de firebase, de ahi se pasaron a el ",
    src:"../imgs/lyadar.png"
  },
  {
    label:"Hidroponía",
    imgFoot:"illustration created with dalle 2 of a hydroponic system",
    description:"El proyecto de hydroponia se sostiene sobres tres pilares tecnicos principales, electronica, programacion y el el empleo de concimientos agronos para completar el proyecto, este consite en tomar los datos dede sensores de temperatura y ph para pasarlos a un servidor de firebase, de ahi se pasaron a el ",
    src:"../imgs/DALL·E 2023-02-26 21.41.25.png"
  },
  {
    label:"MedidorCo2",
    imgFoot:"A picture of a co2 sensor taken from google",
    description:"El proyecto de hydroponia se sostiene sobres tres pilares tecnicos principales, electronica, programacion y el el empleo de concimientos agronos para completar el proyecto, este consite en tomar los datos dede sensores de temperatura y ph para pasarlos a un servidor de firebase, de ahi se pasaron a el ",
    src:"../imgs/scd41-co2-sensor-module-with-co2-temperature-and-humidity-sensor-pim587.jpg"
  }
]



const descriptions = projects.map(project => project.description);






class ProjectSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
      projectDescription: projects[0].description,
      projects: {
        label: projects[0].label,
        imgFoot: projects[0].imgFoot,
        src: projects[0].src
      },
      slideDirection: ""
    };

    
    }
    slideImg = (direction, projects, projectDescription) => {
      if (direction === "right" || direction === "left") {
        this.setState({
          projects: projects,
          projectDescription: projectDescription
        });
      }
    };
  
    clickButton = (buttonTitle) => {
      projects.forEach((project) => {
        if (project.label === buttonTitle) {
          console.log(project);
          this.setState({
            projectDescription: project.description,
            projects: {
              label: project.label,
              imgFoot: project.imgFoot,
              src: project.src
            },
            slideDirection: ""
          });
        }
      });
    };


    
    render() {
        return (
            <section id="project-section">
										<div id = "projects">
											<div id="project-header">
                        {projects.map((project,index) => {
                          return(
                          <div className="project-box">
                            <Button buttonId={project.label} key={index} className="project-title" clickButton={()=>this.clickButton(project.label)} title={project.label}/>
                          </div>)
                        })}
											</div>
											<div id={`project-description`} >
                        <div id="project-description-text">
                          <h2 id="project-title">{this.state.projects.label}</h2>
                          <p>{this.state.projectDescription}</p>
                          <img className="slide-img" src={this.state.projects.src} alt={this.state.projects.label} />
                          <p>{this.state.projects.imgFoot}</p>
                        </div>
                      </div>
                      <SliceImg projects={projects} slideImg = {this.slideImg} description = {descriptions}/>
                    </div>
            </section>
        )
    }
}


export default ProjectSection 