import React from 'react';
import checkerImg from '../img/checkers.png';
import '../style/App.css';



const Checkers: React.FC = () => {

    return(
        <div>
            <h4>Checkers</h4>
            <a href="https://adamgrunke.github.io/checkers/" target="_blank" rel="noopener noreferrer">
                <img className="app-image" src={checkerImg} alt="checkers"></img>
            </a>            
        </div>
    );
} 

export default Checkers;