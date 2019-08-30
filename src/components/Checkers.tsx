import React from 'react';
import checkerImg from '../img/checkers.png';


const Checkers: React.FC = () => {

    return(
        <div>
            <h4>Checkers</h4>
            <a href="https://adamgrunke.github.io/checkers/" target="_blank">
                <img className="app-image" src={checkerImg} alt="checkers"></img>
            </a>            
        </div>
    );
} 

export default Checkers;