import React from "react";
import Button from './Button.js';
import '../static/ProjectSection.css';

const description = {
    lydar:"Este es un proyecto en el que se uso sensores de distancia para marcar y medir puntos en un plano bidimencional para hacer un mapeo, se utilizo una base de datos para almacenar los datos y manipularlos luego se procesaron para mostrar el mapeo de los datos en un servidor",
    hydroponia:"El proyecto de hydroponia se sostiene sobres tres pilares tecnicos principales, electronica, programacion y el el empleo de concimientos agronos para completar el proyecto, este consite en tomar los datos dede sensores de temperatura y ph para pasarlos a un servidor de firebase, de ahi se pasaron a el ",
    medidorCo2: "Este proyecto utiliza un controldor stm32 que atravez de un protocolo I2C toma lecturas de las moleculas de Co2 en el ambiente"
}

const titles = {
    lydar:"Lydar",
    hydroponia:"hydroponia",
    medidorCo2:"MedidorCo2"
}

let lydarObjState ={};
let hydroponiaObjState ={};
let medidorCo2ObjState ={};




class ProjectSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // lydarState:"",
            // lydarDeploy:false,
            // hydroponiaState:"",
            // hydroponiaDeploy:false,
            // medidorCo2State:"",
            // medidorCo2Deploy:""
						projectDescription:""
        };
        this.lydarRef = React.createRef();
        this.hydroponiaRef = React.createRef();
        this.medidorCo2Ref = React.createRef();
    }
    clickButton = (buttonTitle) => {
        switch (buttonTitle) {
					case titles.lydar:
						//this.lydarRef.current.scrollIntoView({ behavior: 'smooth' });
            if(!this.state.lydarDeploy){
              lydarObjState = {
                projectDescription: description.lydar,
                lydarDeploy: true
              };
            }else{
              lydarObjState={
                projectDescription: "",
                lydarDeploy: false
              }
            }
            this.setState(lydarObjState)
            break;
          case  titles.hydroponia:
            if(!this.state.hydroponiaDeploy){
              //this.hydroponiaRef.current.scrollIntoView({ behavior: 'smooth' });
              hydroponiaObjState = {
                projectDescription: description.hydroponia,
                hydroponiaDeploy: true
              };
            }else{
              hydroponiaObjState = {
                projectDescription: "",
                hydroponiaDeploy: false
              };
            }
            this.setState(hydroponiaObjState);
            break;
    
            case  titles.medidorCo2:
              //this.medidorCo2Ref.current.scrollIntoView({ behavior: 'smooth' });
                if(!this.state.medidorCo2Deploy){
                medidorCo2ObjState={
									projectDescription: description.medidorCo2,
									medidorCo2Deploy: true
                }
                }else{
									medidorCo2ObjState = {
										projectDescription: "",
										medidorCo2Deploy: false
                };
            }
            this.setState(medidorCo2ObjState);
            break;
            default:
							return ""
        }
    }
    render() {
        return (
            <section id="projects">
										<div id = "project-description">
											<div id="project-header">
												<div className="project-box">
													<Button clickButton={()=>this.clickButton(titles.lydar)} source="#" title={titles.lydar}/>
												</div>
												<div className="project-box">
													<Button clickButton={()=>this.clickButton(titles.hydroponia)} source="#" title={titles.hydroponia}/>
												</div>
												<div className="project-box">
													<Button clickButton={()=>this.clickButton(titles.medidorCo2)} source="#" title={titles.medidorCo2}/>            
												</div>										
											</div>
												
												<p>{this.state.projectDescription}</p>
											</div>
            </section>
        )
    }
}


export default ProjectSection 