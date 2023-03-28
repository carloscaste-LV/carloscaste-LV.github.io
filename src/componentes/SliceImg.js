import React from "react";
import Button from "./Button";
import '../static/ProjectSection.css';



// const imgs = {
//   img:[
//     {
//       label:"Lidar",
//       imgFoot:"distance mapping from a static reference point",
//       src:"../imgs/lyadar.png"
//     },
//     {
//       label:"Hidroponía",
//       imgFoot:"illustration created with dalle 2 of a hydroponic system",
//       src:"../imgs/DALL·E 2023-02-26 21.41.25.png"
//     },
//     {
//       label:"MedidorCo2",
//       imgFoot:"A picture of a co2 sensor taken from google",
//       src:"../imgs/scd41-co2-sensor-module-with-co2-temperature-and-humidity-sensor-pim587.jpg"
//     }
//   ]
// }


export default class sliceImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      onSlide: false,
      projects:this.props.projects,
      projectNum:0
    };
    

    setTimeout(() => {
      document.getElementById(`circle-0`).classList.add("slide-selected");
    }, 50);
  }
  
  slideRight = () => {
    const projects = this.props.projects;
    if (!this.state.onSlide){
      this.setState({onSlide:true});
      let description = this.props.description

      const { projectNum } = this.state;
      const nextImgNum = (projectNum + 1) % projects.length;

      //Animation slide project-description rigth

      document.getElementById("project-description-text").classList.add("slide-animation-right")


      document.getElementById(projects[nextImgNum].label).classList.add("project-selected")
      document.getElementById(projects[projectNum].label).classList.remove("project-selected")

      setTimeout(() => {
        this.setState({ img: projects[nextImgNum], projectNum: nextImgNum });
        document.getElementById(`circle-${projectNum}`).classList.remove("slide-selected");
        document.getElementById(`circle-${nextImgNum}`).classList.add("slide-selected");
        this.props.slideImg("right",projects[nextImgNum], description[Object.keys(description)[nextImgNum]]);
      },100)
      setTimeout(() => {
        document.getElementById("project-description-text").classList.remove("slide-animation-right");
        this.setState({onSlide:false});
      },1000)
      
    };
  }

  slideLeft = () => {
    const projects = this.props.projects;
    if (!this.state.onSlide){
      this.setState({onSlide:true});
      let description = this.props.description

      const { projectNum } = this.state;
      const nextImgNum = (projectNum - 1 + projects.length) % projects.length;

      //Animation slide project-description rigth

      document.getElementById("project-description-text").classList.add("slide-animation-left")

      document.getElementById(projects[nextImgNum].label).classList.add("project-selected")
      document.getElementById(projects[projectNum].label).classList.remove("project-selected")

      setTimeout(() => {
        this.setState({ img: projects[nextImgNum], projectNum: nextImgNum });
        document.getElementById(`circle-${projectNum}`).classList.remove("slide-selected");
        document.getElementById(`circle-${nextImgNum}`).classList.add("slide-selected");
        this.props.slideImg("left",projects[nextImgNum], description[Object.keys(description)[nextImgNum]]);
      },100)
      setTimeout(() => {
        document.getElementById("project-description-text").classList.remove("slide-animation-left");
        this.setState({onSlide:false});
      },1000)
      
    };
  }
  
  render() {
    const projects = this.props.projects;
    return (
      <div id="slide">        
        <div id="project-selctor">
          <Button className="buttonSlide" title={<i className="material-icons">chevron_left</i> } clickButton={this.slideLeft}/>
            {projects.map((img,index) =>
              <div key={index} id={`circle-${index}`} className="slide-circles"></div>
            )}
          <Button className="buttonSlide" title={<i className="material-icons">chevron_right</i>} clickButton={this.slideRight}/>
        </div>
      </div>
    )
  };  
};