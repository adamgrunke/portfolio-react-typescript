import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';

import ContactMe from './components/ContactMe'
import AllApps from './components/AllApps';
const App: React.FC = () => {
  return (
    <div className="App">
      <AboutMe/>
      <hr/>
      <AllApps/>
      <hr/>
      <ContactMe/>
  

    </div>
  );
}

export default App;
