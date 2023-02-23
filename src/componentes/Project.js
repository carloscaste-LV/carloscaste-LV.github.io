import React from "react";
import '../static/Project.css';



class Project extends React.Component {
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


export default Project