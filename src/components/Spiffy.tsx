import React from 'react';
<<<<<<< HEAD
import '../style/ProjectComponent.css';
import spiffyImg from '../img/spiffy.png';
=======
// import spiffyImg from '../img/spiffy.png';
import '../style/App.css';
>>>>>>> 5f0bd0a377f5bc60769c08af7ec513670816c098


const Spiffy: React.FC = () => {

<<<<<<< HEAD
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
=======
    return(
        <div>
            <h4 className="proj-title">Spiffy</h4>
            <a href="https://afternoon-shore-37936.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <i className="projects fab fa-spotify fa-size"></i>
            </a>
>>>>>>> 5f0bd0a377f5bc60769c08af7ec513670816c098
        </div>
    );
}

export default Spiffy;