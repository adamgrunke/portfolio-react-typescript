import React from 'react';
// import spiffyImg from '../img/spiffy.png';
import '../style/App.css';


const Spiffy: React.FC = () => {

    return(
        <div>
            <h4>Spiffy</h4>
            <a href="https://afternoon-shore-37936.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <i className="projects fab fa-spotify fa-10x"></i>
            </a>
        </div>
    );
}

export default Spiffy;