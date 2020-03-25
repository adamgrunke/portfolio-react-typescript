import React from 'react';
import cleanUpImg from '../img/cleanup.png'

const CleanUp: React.FC = () => {
    
    function openCleanUpApp(e: React.MouseEvent): void {
        e.preventDefault()
        // const url: string = "https://warm-oasis-21230.herokuapp.com/"
        const url: string = "https://www.linkedin.com/in/adamgrunke/"
        window.open(url, 'blank')
    }
    return(
        <div>
            <h4>CleanUp</h4>
            <img className="app-image" src={cleanUpImg} alt="cleanup"></img>
            <button onClick={openCleanUpApp}>Open the CleanUp App</button>
        </div>
    );
}

export default CleanUp;