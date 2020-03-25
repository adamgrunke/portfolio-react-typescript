import React from 'react';
// import cleanUpImg from '../img/cleanup.png';
import '../style/App.css';


const CleanUp: React.FC = () => {
<<<<<<< HEAD
    
    function openCleanUpApp(e: React.MouseEvent): void {
        e.preventDefault()
        // const url: string = "https://warm-oasis-21230.herokuapp.com/"
        const url: string = "https://www.linkedin.com/in/adamgrunke/"
        window.open(url, 'blank')
    }
=======

>>>>>>> 5f0bd0a377f5bc60769c08af7ec513670816c098
    return(
        <div>
            <h4 className="proj-title">CleanUp</h4>
            <a href="https://warm-oasis-21230.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <i className="projects fas fa-broom fa-size"></i>
            </a>
        </div>
    );
}

export default CleanUp;