import React from 'react';
import Spiffy from './Spiffy';
import RainCheck from './RainCheck';
import CleanUp from './CleanUp';
import Checkers from './Checkers';
import '../style/App.css';

const Projects: React.FC = () => {

    return(
        <div className="project-container">
            <div className="proj">
                <Spiffy/>
            </div>
            <div className="proj">
                <RainCheck/>
            </div>
            <div className="proj">
                <CleanUp/>
            </div>
            <div className="proj">
                <Checkers/>        
            </div>
        </div>
    );
}

export default Projects;