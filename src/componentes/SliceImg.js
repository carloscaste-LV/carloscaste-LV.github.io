import React from "react";
import Button from "./Button";
import '../static/ProjectSection.css';



const imgs = {
  img:[
    {
      label:"Lidar",
      imgFoot:"distance mapping from a static reference point",
      src:"../imgs/lyadar.png"
    },
    {
      label:"Hidroponía",
      imgFoot:"illustration created with dalle 2 of a hydroponic system",
      src:"../imgs/DALL·E 2023-02-26 21.41.25.png"
    },
    {
      label:"MedidorCo2",
      imgFoot:"A picture of a co2 sensor taken from google",
      src:"../imgs/scd41-co2-sensor-module-with-co2-temperature-and-humidity-sensor-pim587.jpg"
    }
  ]
}


export default class sliceImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onSlide: false,
      img:{
        label:"lidarImg",
        imgFoot:"distance mapping from a static reference point",
        src:"../imgs/lyadar.png"
      },
      imgNum:0
    };
    setTimeout(() => {
      document.getElementById(`circle-0`).classList.add("slide-selected");
    }, 50);
  }
  
  slideRight = () => {
    if (!this.state.onSlide){
      this.setState({onSlide:true});
      let description = this.props.description;

      const { imgNum } = this.state;
      const nextImgNum = (imgNum + 1) % imgs.img.length;

      //Animation slide project-description rigth

      document.getElementById("project-description-text").classList.add("slide-animation-right")


      document.getElementById(imgs.img[nextImgNum].label).classList.add("project-selected")
      document.getElementById(imgs.img[imgNum].label).classList.remove("project-selected")

      setTimeout(() => {
        this.setState({ img: imgs.img[nextImgNum], imgNum: nextImgNum });
        document.getElementById(`circle-${imgNum}`).classList.remove("slide-selected");
        document.getElementById(`circle-${nextImgNum}`).classList.add("slide-selected");
        this.props.slideImg("right",imgs.img[nextImgNum], description[Object.keys(description)[nextImgNum]]);
      },100)
      setTimeout(() => {
        document.getElementById("project-description-text").classList.remove("slide-animation-right");
        this.setState({onSlide:false});
      },1000)
      
    };
  }

  slideLeft = () => {
    if (!this.state.onSlide){
      this.setState({onSlide:true});
      let description = this.props.description;

      const { imgNum } = this.state;
      const nextImgNum = (imgNum - 1 + imgs.img.length) % imgs.img.length;

      //Animation slide project-description rigth

      document.getElementById("project-description-text").classList.add("slide-animation-left")

      document.getElementById(imgs.img[nextImgNum].label).classList.add("project-selected")
      document.getElementById(imgs.img[imgNum].label).classList.remove("project-selected")

      setTimeout(() => {
        this.setState({ img: imgs.img[nextImgNum], imgNum: nextImgNum });
        document.getElementById(`circle-${imgNum}`).classList.remove("slide-selected");
        document.getElementById(`circle-${nextImgNum}`).classList.add("slide-selected");
        this.props.slideImg("left",imgs.img[nextImgNum], description[Object.keys(description)[nextImgNum]]);
      },100)
      setTimeout(() => {
        document.getElementById("project-description-text").classList.remove("slide-animation-left");
        this.setState({onSlide:false});
      },1000)
      
    };
  }
  
  render() {
    return (
      <div id="slide">        
        <div id="project-selctor">
          <Button className="buttonSlide" title={<i className="material-icons">chevron_left</i> } clickButton={this.slideLeft}/>
            {imgs.img.map((img,index) =>
              <div key={index} id={`circle-${index}`} className="slide-circles"></div>
            )}
          <Button className="buttonSlide" title={<i className="material-icons">chevron_right</i>} clickButton={this.slideRight}/>
        </div>
      </div>
    )
  };  
};