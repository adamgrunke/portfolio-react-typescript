import React from 'react';
import './style/App.css';
// import MyDetails from './components/MyDetails';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import SkillsCollection from './components/SkillsCollection';


const App: React.FC = () => {
  return (
    <div className="container">
      <div className="header">
        <Header/>
      </div>
      <div className="mydetails">
        {/* <MyDetails/> */}
      </div>
      <div className="skills">
        <SkillsCollection/>
      </div>
      <div className="projects">
        <Projects/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
