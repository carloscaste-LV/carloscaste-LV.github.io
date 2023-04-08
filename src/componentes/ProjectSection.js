import React from "react";
import Button from './Button.js';
import SliceImg from "./SliceImg.js";
import '../static/ProjectSection.css';


const projects=[
  {
    label:"Lidar",
    imgFoot:"distance mapping from a static reference point",
    description:`The project is a <span>control application</span> consisting of four parts: <span>communication structure</span> ESP32(server)-PC(client), <span>data processing</span>, <span>API</span>, and <span>data visualization</span>. The connection is made through <span>websockets</span>, and the server sends data to the client in string form. Then, the client uses two data processing functions, one for the <span>VL53L0X sensor</span> and another for the <span>MPU6050</span>. To process and store the data, an <span>API</span> with <span>POST</span> and <span>GET</span> methods is used, which connects to a <span>PostgreSQL</span> database. Finally, the <span>Javascript canvas library</span> is used to visualize the data in the form of <span>line charts</span>.

    In the first part of the project, an <span>ESP32(server)-PC(client) communication structure</span> is used, which connects through <span>websockets</span>, and the server sends data to the client in string form. Then, in the second part, the client uses two <span>data processing</span> functions to manipulate the data it receives from the server and store it in a <span>PostgreSQL</span> database using an <span>API</span> with <span>POST</span> and <span>GET</span> methods. In the third part, an <span>API</span> is used that connects to a <span>PostgreSQL</span> database to process and store the data. Finally, in the last part, the <span>Javascript canvas library</span> is used to visualize the data in the form of <span>line charts</span>.
    
    This project is an example of how a <span>server-client communication</span> structure can be used to process and store data asynchronously. It also shows how <span>data processing</span> functions can be used to manipulate the data received from the server and how data can be visualized using a <span>Javascript library</span>. Overall, this project can be used as a base for future projects that require <span>real-time data processing</span> and <span>data visualization</span>.`,
    src:"../imgs/lyadar.png"
  },

  {
    label:"Hidroponía",
    imgFoot:"illustration created with dalle 2 of a hydroponic system",
    description:`Este es un proyecto de <span>sistema hidropónico</span> basado en IoT, que utiliza la técnica de <span>flujo laminar de nutrientes</span> (NFT). El proyecto consiste en un <span>bombeo</span> que utiliza <span>canaletas de PVC</span> donde se colocan las plantas, de ahí las plantas reciben <span>nutrientes del agua</span> que se recircula constantemente a través de los tubos.

    Se utilizarán <span>redes neuronales recurrentes (RNN)</span> para predecir el <span>pH de la planta</span> y mostrar los resultados gráficamente por día, lo que optimiza el tiempo del cultivo. Aunque este método es práctico, el <span>costo inicial de inversión</span> es elevado para algunas personas, pero como se producirán <span>vegetales de calidad</span>, pueden ser vendidos como tal.
    
    El sistema hidropónico IoT tiene una funcionalidad añadida que se divide en tres secciones principales: <span>cliente</span>, <span>interfaz gráfica de usuario</span> y <span>servidor</span>. La sección del servidor funciona como intermediario entre el cliente y la interfaz gráfica. Los <span>sensores</span> miden diferentes parámetros como el <span>nivel de pH</span>, la <span>temperatura del agua</span>, la <span>humedad y temperatura del ambiente</span>, y se utilizan para la <span>monitorización en tiempo real y el control</span> del sistema hidropónico NFT.`,
    src:"../imgs/DALL·E 2023-02-26 21.41.25.png"
  },
  {
    label:"MedidorCo2",
    imgFoot:"A picture of a co2 sensor taken from google",
    description:"El proyecto de hydroponia se sostiene sobres tres pilares tecnicos principales, electronica, programacion y el el empleo de concimientos agronos para completar el proyecto, este consite en tomar los datos dede sensores de temperatura y ph para pasarlos a un servidor de firebase, de ahi se pasaron a el ",
    src:"../imgs/scd41-co2-sensor-module-with-co2-temperature-and-humidity-sensor-pim587.jpg"
  }
]



const descriptions = projects.map(project => {
  const description = project.description;
  const spans = description.split(/<span>([^<]+)<\/span>/g);
  const elements = [];

  for (let i = 0; i < spans.length; i++) {
    if (i % 2 === 0) {
      // Texto normal, agregar como texto plano con saltos de línea
      const lines = spans[i].split("\n");
      for (let j = 0; j < lines.length; j++) {
        elements.push(<React.Fragment key={i + "_" + j}>{lines[j]}</React.Fragment>);
        if (j < lines.length - 1) {
          elements.push(<br key={i + "_" + j + "_br"} />);
        }
      }
    } else {
      // Texto dentro de span, agregar como span HTML con clase "highlights"
      elements.push(<span className="highlights" key={i}>{spans[i]}</span>);
    }
  }
  
  return elements;
});








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
    
    
    // clickButton = (buttonTitle) => {
    //   projects.forEach((project) => {
    //     if (project.label === buttonTitle) {
    //       console.log(project);
    //       this.setState({
    //         projectDescription: project.description,
    //         projects: {
    //           label: project.label,
    //           imgFoot: project.imgFoot,
    //           src: project.src
    //         },
    //         slideDirection: ""
    //       });
    //     }
    //   });
    // };
    

    
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
                          {/* <img className="slide-img" src={this.state.projects.src} alt={this.state.projects.label} /> */}
                          
                          <div className="image-container">
                            <img className="slide-img" src={this.state.projects.src} alt={this.state.projects.label}/>
                            <div class="image-caption">
                              <p><span class="highlights">Figure 1:</span>{this.state.projects.imgFoot}</p>
                            </div>
                          </div>

                          {/* <p>{this.state.projects.imgFoot}</p> */}
                        </div>
                      </div>
                      <SliceImg projects={projects} slideImg = {this.slideImg} description = {descriptions}/>
                    </div>
            </section>
        )
    }
}


export default ProjectSection 