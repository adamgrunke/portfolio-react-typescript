import React from 'react';
import './style/App.css';
import MyDetails from './components/MyDetails';
import AllApps from './components/AllApps';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <div >
        <Header/>
      </div>
      <div className="body">
        <MyDetails/>
        <AllApps/>
      </div>
    </div>
  );
}

export default App;
