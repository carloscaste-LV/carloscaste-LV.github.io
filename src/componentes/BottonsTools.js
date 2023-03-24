import React from "react";
import Button from "./Button";



class BottonsTools extends React.Component {
    constructor(){
        this.state = {
            light:"on",
            color:"default",
        };
        lightButtonClick = () => {

        };
    }
    render(){
        return (<div>
            <Button id="lightButton" onClick={this.lightButtonClick()}/>
            <Button/>
        </div>)
    }
}