import React from 'react';
import cleanUpImg from '../img/cleanup.png';
import '../style/App.css';


const CleanUp: React.FC = () => {

    return(
        <div className="project-container">
            <h4>CleanUp</h4>
            <a href="https://warm-oasis-21230.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <img className="app-image" src={cleanUpImg} alt="cleanup"></img>
            </a>
        </div>
    );
}

export default CleanUp;