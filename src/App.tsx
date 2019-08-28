import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import SkillsCollection from './components/SkillsCollection';
import Spiffy from './components/Spiffy';
import RainCheck from './components/RainCheck';
import CleanUp from './components/CleanUp';
import Checkers from './components/Checkers'
const App: React.FC = () => {
  return (
    <div className="App">
      <AboutMe/>
      <hr/>
      <SkillsCollection/>
      <hr/>
      <Spiffy/>
      <hr/>
      <RainCheck/>
      <hr/>
      <CleanUp/>
      <hr/>
      <Checkers/>
  

    </div>
  );
}

export default App;
