import React from "react";
import Button from './Button.js';
import SliceImg from "./SliceImg.js";
import '../static/ProjectSection.css';


const project = [
  {
    title: 'Lidar', 
    description: "Este es un proyecto en el que se usó sensores de distancia para marcar y medir puntos en un plano bidimensional para hacer un mapeo. Se utilizó una base de datos para almacenar los datos y manipularlos. Luego se procesaron para mostrar el mapeo de los datos en un servidor.",
    img: '../imgs/lyadar.png'
  },
  {
    title: "Hidroponía",
    description: "El proyecto de hidroponía se sostiene sobre tres pilares técnicos principales: electrónica, programación y el empleo de conocimientos agronómicos para completar el proyecto. Consiste en tomar los datos de sensores de temperatura y pH para pasarlos a un servidor de Firebase. De ahí se pasaron al...",
    img: '../imgs/scd41-co2-sensor-module-with-co2-temperature-and-humidity-sensor-pim587.jpg'
  },
  {
    title: "MedidorCo2",
    description: "Este proyecto utiliza un controlador STM32 que a través de un protocolo I2C toma lecturas de las moléculas de CO2 en el ambiente.",
    img: '../imgs/scd41-co2-sensor-module-with-co2-temperature-and-humidity-sensor-pim587.jpg'
  }
];

const description = {
    lydar:"Este es un proyecto en el que se uso sensores de distancia para marcar y medir puntos en un plano bidimencional para hacer un mapeo, se utilizo una base de datos para almacenar los datos y manipularlos luego se procesaron para mostrar el mapeo de los datos en un servidor",
    hydroponia:"El proyecto de hydroponia se sostiene sobres tres pilares tecnicos principales, electronica, programacion y el el empleo de concimientos agronos para completar el proyecto, este consite en tomar los datos dede sensores de temperatura y ph para pasarlos a un servidor de firebase, de ahi se pasaron a el ",
    medidorCo2: "Este proyecto utiliza un controldor stm32 que atravez de un protocolo I2C toma lecturas de las moleculas de Co2 en el ambiente"
}








class ProjectSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
						projectDescription:description.lydar,
            img:{
              label:project[0].title,
              imgFoot:"distance mapping from a static reference point",
              src:project[0].img
            },
            slideDirection:""
        };

    
    }
    slideImg = (direction, img, projectDescription) => {
      if (direction === "right") {
        this.setState({
        img: img,
        projectDescription:projectDescription
        });
      }
      if (direction === "left") {
        this.setState({
        img: img,
        projectDescription:projectDescription
        });
      }
    };


    clickButton = (buttonTitle) => {
      project.forEach((project) => {
        if (project.title === buttonTitle) {
          console.log(project.title);
          console.log(project.description);
          this.setState({
            projectDescription: project.description,
            img: {
              label: project.title,
              imgFoot: "",
              src: project.img
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
                        {project.map((project,index) => {
                          return(
                          <div className="project-box">
                            <Button buttonId={project.title} key={index} className="project-title" clickButton={()=>this.clickButton(project.title)} source="#" title={project.title}/>
                          </div>)
                        })}
											</div>
											<div id={`project-description`} >
                        <div id="project-description-text">
                          <h2 id="project-title">{this.state.img.label}</h2>
                          <p>{this.state.projectDescription}</p>
                          <img className="slide-img" src={this.state.img.src} alt={this.state.img.label} />
                          <p>{this.state.img.imgFoot}</p>
                        </div>
                      </div>
                      <SliceImg slideImg = {this.slideImg} description = {description}/>
                    </div>
            </section>
        )
    }
}


export default ProjectSection 