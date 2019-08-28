import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe'
import SkillsCollection from './components/SkillsCollection'

const App: React.FC = () => {
  return (
    <div className="App">
      <AboutMe/>
      <hr/>
      <SkillsCollection/>
      <hr/>

    </div>
  );
}

export default App;
