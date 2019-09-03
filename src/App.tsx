import React from 'react';
import './style/App.css';
import MyDetails from './components/MyDetails';
import AllApps from './components/AllApps';

const App: React.FC = () => {
  return (
    <div className="App">
      <MyDetails/>
      <AllApps/>
    </div>
  );
}

export default App;
