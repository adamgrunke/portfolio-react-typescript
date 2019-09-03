import React from 'react';
import raincheckImg from '../img/raincheck.png';
import '../style/App.css';


const RainCheck: React.FC = () => {

    return(
        <div className="project-container">
            <h4>Raincheck</h4>
            <a href="https://fathomless-temple-87598.herokuapp.com" target="_blank" rel="noopener noreferrer">
                <img className="app-image" src={raincheckImg} alt="raincheck"></img>
            </a>
        </div>
    );
}

export default RainCheck;