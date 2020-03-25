import React from 'react';
import '../style/ProjectComponent.css';
import spiffyImg from '../img/spiffy.png';


const Spiffy: React.FC = () => {

    function openSpiffyApp(e: React.MouseEvent): void {
        e.preventDefault()
        // const url: string = "https://afternoon-shore-37936.herokuapp.com/"
        const url: string = "https://www.linkedin.com/in/adamgrunke/"
        window.open(url, 'blank')
    }

    return(
        <div className="container">
            <h4>Spiffy</h4>
            <img className="app-image" src={spiffyImg} alt="spiffy"></img>
            <button onClick={openSpiffyApp}>Open the Spiffy App</button>
        </div>
    );

}

export default Spiffy;