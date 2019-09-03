import React from 'react';
import spiffyImg from '../img/spiffy.png';
import '../style/App.css';


const Spiffy: React.FC = () => {

    return(
        <div className="project-container">
            <h4>Spiffy</h4>
            <a href="https://afternoon-shore-37936.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <img className="app-image" src={spiffyImg} alt="spiffy"></img>
            </a>
        </div>
    );
}

export default Spiffy;