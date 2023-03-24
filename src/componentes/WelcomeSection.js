import React from "react";
import '../static/WelcomeSeccion.css';
import Typed from 'typed.js';


export default class WelcomeSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideHeader: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
    
  }
  
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    var typed = new Typed(".typing",{
      strings:["","Web Designer","Web Developer","Graphic Designer","Mecatronic Student"],
      typeSpeed:100,
      loop:true
  })
  }

  handleScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 300) {
      this.setState({ hideHeader: true });
      document.getElementById(`header`).classList.add("hide-header");
    } else {
      this.setState({ hideHeader: false });
      document.getElementById(`header`).classList.remove("hide-header");
    }
  }

  render() {
    
    return (
      <section id="welcome-section">      
        <div id="im">
        <div id="profile">
          <div id="img-container">
            <img src='../imgs/profile3.jpg' alt="profile img"/>
          </div>
          <div id="profile-text">
            <h1>My name is Carlos Castellanos</h1>
            <h2>I a'm a <span className="typing">Mecatronic Ingenier</span></h2>
          </div>
        </div>  
          <div id="about">
            <h3>About Me</h3>
            <p>Soy un ingeniero mecatrónico apasionado por la tecnología y la programación. A lo largo de mi carrera he tenido la oportunidad de trabajar en diversos proyectos donde he podido aplicar mis conocimientos en robótica, automatización y control de procesos.</p>
            <p>Además, durante mi trayectoria profesional me he desarrollado como front-end developer, especializándome en la creación de experiencias de usuario atractivas y funcionales. Me encanta trabajar en equipo y encontrar soluciones creativas e innovadoras para cada proyecto que abordo.</p>
            <p>Considero que mi formación en ingeniería mecatrónica y mi experiencia en desarrollo web me han brindado un conjunto único de habilidades y conocimientos que me permiten abordar desafíos complejos con una visión integral y un enfoque práctico. Estoy comprometido con seguir aprendiendo y mejorando día a día para ofrecer siempre lo mejor de mí en cada proyecto en el que participo.</p>
          </div>
        </div>
      </section>
    );
  }
}

