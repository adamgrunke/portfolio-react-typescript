import React from 'react';
// import checkerImg from '../img/checkers.png';
import '../style/App.css';



const Checkers: React.FC = () => {

    return(
        <div>
            <h4>Checkers</h4>
            <a href="https://adamgrunke.github.io/checkers/" target="_blank" rel="noopener noreferrer">
            <i className="projects fas fa-chess-board fa-10x"></i>
            </a>            
        </div>
    );
} 

export default Checkers;