import React from 'react';
import '../static/App.css';
import Project from './Project.js';


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



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      lydarState:"", //description.lydar,
      lydarDeploy:false,
      hydroponiaState:"", //description.hydroponia,
      hydroponiaDeploy:false,
      medidorCo2State:"", //description.medidorCo2
      medidorCo2Deploy:""
    };
    this.lydarRef = React.createRef();
    this.hydroponiaRef = React.createRef();
    this.medidorCo2Ref = React.createRef();
  }
  clickButton = (buttonTitle) => {
    switch (buttonTitle) {
      case  titles.lydar:
        this.lydarRef.current.scrollIntoView({ behavior: 'smooth' });
        if(!this.state.lydarDeploy){
          lydarObjState = {
            lydarState: description.lydar,
            lydarDeploy: true
          };
        }else{
          lydarObjState={
            lydarState: "",
            lydarDeploy: false
          }
        }
        this.setState(lydarObjState)
        break;

      case  titles.hydroponia:
        if(!this.state.hydroponiaDeploy){
          this.hydroponiaRef.current.scrollIntoView({ behavior: 'smooth' });
          hydroponiaObjState = {
            hydroponiaState: description.hydroponia,
            hydroponiaDeploy: true
          };
        }else{
          hydroponiaObjState = {
            hydroponiaState: "",
            hydroponiaDeploy: false
          };
        }
        this.setState(hydroponiaObjState);
        break;

        case  titles.medidorCo2:
          this.medidorCo2Ref.current.scrollIntoView({ behavior: 'smooth' });
          if(!this.state.medidorCo2Deploy){
            medidorCo2ObjState={
              medidorCo2State: description.medidorCo2,
              medidorCo2Deploy: true
            }
          }else{
            medidorCo2ObjState = {
              medidorCo2State: "",
              medidorCo2Deploy: false
            };
          }
          this.setState(medidorCo2ObjState);
          break;
      default:
        return ""
    }
  }
  render(){
    return (
      <main>
        <section id="welcome-section">
        
            <div id="im">
            <h1>My name is Carlos Castellanos</h1>
            <h2>I am a <span>Mecatronic Ingenier</span></h2>
            <div id = "about">
              <h3>About Me</h3>
              <p>Im</p>
            </div>


            </div>
        </section>
        <section id="projects">
          <div className="project-box" ref={this.lydarRef}>
            <Project clickButton={()=>this.clickButton(titles.lydar)} source="#" title={titles.lydar}/>
            <p className='project-description'>{this.state.lydarState}{this.state.lydarDesc}{this.state.lydarDesc}</p>
          </div>
          <div className="project-box" ref={this.hydroponiaRef}>
            <Project clickButton={()=>this.clickButton(titles.hydroponia)} source="#" title={titles.hydroponia}/>
            <p className='project-description'>{this.state.hydroponiaState}</p>
          </div>
          <div className="project-box" ref={this.medidorCo2Ref}>
            <Project clickButton={()=>this.clickButton(titles.medidorCo2)} source="#" title="Medidor de Co2"/>
            <p className='project-description'>{this.state.medidorCo2State}</p>
          </div>
          <div>{this.state.mensaje}</div>
        </section>
      </main>
      );
  }
}
export default App;
