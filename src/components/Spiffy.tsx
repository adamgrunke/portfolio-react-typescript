import React from 'react';
import '../style/ProjectComponent.css';
import spiffyImg from '../img/spiffy.png';


const Spiffy: React.FC = () => {

    return(
        <div className="container">
            <h4>Spiffy</h4>
            <a href="https://afternoon-shore-37936.herokuapp.com/" target="_blank">
                <img className="app-image" src={spiffyImg} alt="spiffy"></img>
            </a>
        </div>
    );

}

export default Spiffy;