import React from 'react';
import '../static/App.css';
import ContactSection from './ContactSection';
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
        <ContactSection/>
      </main>
      );
  }
}
export default App;
