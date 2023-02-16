import React from "react";
import ReactDOM from 'react-dom/client';

class Project extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (                
        <div class={this.props.title}>
            <a href="#"><p>{this.props.title}</p></a>
        </div>);
    }
}

ReactDOM.render(<Project/>,document.getElementById("project"))

export default Project