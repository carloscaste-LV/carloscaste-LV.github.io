import React from "react";
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
                document.documentElement.style.setProperty('--background-body', 'rgb(242, 242, 252)');
                document.documentElement.style.setProperty('--border-color', '1px solid rgb(242, 242, 252)');
                
            } else {
                document.documentElement.style.setProperty('--background-body', 'rgb(21, 21, 30)');
                document.documentElement.style.setProperty('--border-color', '1px solid rgb(30, 30, 40)');
                console.log("no luz")
            }
        });
    };
    

    render() {
        return (
            <div>
                <Button className="buttons-control" title="luz" buttonId="lightButton" key="0" clickButton={this.lightButtonClick}/>
            </div>
        )
    }
}
