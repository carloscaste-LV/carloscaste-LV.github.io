import React from 'react';
import '../static/App.css';
import ProjectSection from './ProjectSection';
import WelcomeSection from './WelcomeSection';

class App extends React.Component{
  constructor(props){
    super(props);}
  render(){
    return (
      <main>
        <WelcomeSection/>
        <ProjectSection/>
      </main>
      );
  }
}
export default App;
