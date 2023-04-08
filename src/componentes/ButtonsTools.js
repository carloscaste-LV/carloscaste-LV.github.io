import React from "react";
import '../static/ButtonsTools.css'
import Button from "./Button";

export default class ButtonsTools extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            light: true,
            color: "default",            
        };
    }

    lightButtonClick = () => {
        console.log("lightButtonClick was called");
        this.setState({ light: !this.state.light }, () => {
            if (this.state.light) {
                console.log("luz")
                document.documentElement.style.setProperty('--background-body', 'rgb(230, 230, 255)');
                document.documentElement.style.setProperty('--color-titles', 'rgb(42,42,90)');
                document.documentElement.style.setProperty('--color-content', 'rgb(21,21,55)');
                document.documentElement.style.setProperty('--color-tools', 'rgb(40,40,80)');
                document.documentElement.style.setProperty('--background-content', 'rgb(235,240,255)');
                
                document.documentElement.style.setProperty('--shadow-tools', '0px 0px 10px 1px rgba(10,10, 255,0.9');
                document.documentElement.style.setProperty('--background-tools', 'rgb(220,220,220)');
                document.documentElement.style.setProperty('--border-color', '1px solid rgb(210, 210, 210)');
            } else {
                document.documentElement.style.setProperty('--background-body', 'rgb(21, 21, 30)');
                document.documentElement.style.setProperty('--color-titles', 'rgb(230,230,255)');
                document.documentElement.style.setProperty('--color-content', 'rgb(180,180,230)');
                document.documentElement.style.setProperty('--color-tools', 'rgb(240,240,150)');
                document.documentElement.style.setProperty('--background-content', 'rgb(22,22,35)');

                document.documentElement.style.setProperty('--background-tools', 'rgb(51,51,51)');
                document.documentElement.style.setProperty('--shadow-tools', '0px 0px 10px 1px rgba(255, 255, 255,0.2')
                document.documentElement.style.setProperty('--border-color', '1px solid rgb(71,71,71)');
                console.log("no luz")
            }
        });
    };
    

    render() {
        return (
            <Button  className="buttons-control" title={this.state.light?
                <span class="material-symbols-outlined">dark_mode</span>:
                <span class="material-symbols-outlined">light_mode</span>} 
                buttonId="lightButton" 
                key="0" clickButton={this.lightButtonClick}></Button>
        )
    }
}
