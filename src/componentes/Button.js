import React from "react";



class Button extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <button id={this.props.buttonId} onClick={this.props.clickButton} href={this.props.source}>{this.props.title}</button>
            </div>
        );
    }
}


export default Button