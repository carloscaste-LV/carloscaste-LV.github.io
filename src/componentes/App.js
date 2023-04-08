import React from 'react';
import '../static/App.css';
import ContactSection from './ContactSection';
import ProjectSection from './ProjectSection';
import WelcomeSection from './WelcomeSection';
import ButtonsTools from './ButtonsTools.js';

class App extends React.Component{
  componentDidMount() {
    window.scrollTo(0, 0);
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }


  render(){
    
    return (
      <main  >
        <ButtonsTools/>
        <WelcomeSection/>
        <ProjectSection/>
        <ContactSection/>
      </main>
      );
  }
}
export default App;
