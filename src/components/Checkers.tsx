import React from 'react';
// import checkerImg from '../img/checkers.png';
import '../style/App.css';



<<<<<<< HEAD
    function openCheckersApp(e: React.MouseEvent): void {
        e.preventDefault()
        // const url: string = "https://adamgrunke.github.io/checkers/"
        const url: string = "https://www.linkedin.com/in/adamgrunke/"
        window.open(url, 'blank')
    }
=======
const Checkers: React.FC = () => {
>>>>>>> 5f0bd0a377f5bc60769c08af7ec513670816c098

    return(
        <div>
            <h4 className="proj-title">Checkers</h4>
            <a href="https://adamgrunke.github.io/checkers/" target="_blank" rel="noopener noreferrer">
            <i className="projects fas fa-chess-board fa-size"></i>
            </a>            
        </div>
    );
} 

export default Checkers;