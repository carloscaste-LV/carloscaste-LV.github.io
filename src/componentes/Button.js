import React from "react";



class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="project-title">
                <button onClick={this.props.clickButton} href={this.props.source}>{this.props.title}</button>
            </div>
        );
    }
}


export default Button