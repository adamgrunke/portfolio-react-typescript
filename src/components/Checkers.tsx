import React from 'react';
// import checkerImg from '../img/checkers.png';
import '../style/App.css';



    function openCheckersApp(e: React.MouseEvent): void {
        e.preventDefault()
        // const url: string = "https://adamgrunke.github.io/checkers/"
        const url: string = "https://www.linkedin.com/in/adamgrunke/"
        window.open(url, 'blank')
    }

    return(
        <div>
            <h4 className="proj-title">Checkers</h4>
            <a href="https://www.linkedin.com/in/adamgrunke/" target="_blank" rel="noopener noreferrer">
            <i className="projects fas fa-chess-board fa-size"></i>
            </a>            
        </div>
    );
} 

export default Checkers;