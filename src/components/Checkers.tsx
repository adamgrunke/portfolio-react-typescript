import React from 'react';
import checkerImg from '../img/checkers.png';


const Checkers: React.FC = () => {

    function openCheckersApp(e: React.MouseEvent): void {
        e.preventDefault()
        // const url: string = "https://adamgrunke.github.io/checkers/"
        const url: string = "https://www.linkedin.com/in/adamgrunke/"
        window.open(url, 'blank')
    }

    return(
        <div>
            <h4>Checkers</h4>
            <img className="app-image" src={checkerImg} alt="checkers"></img>
            <button onClick={openCheckersApp}>Open the Checkers App</button>
            
        </div>
    );
} 

export default Checkers;