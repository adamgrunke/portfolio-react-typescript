import React from 'react';
import cleanUpImg from '../img/cleanup.png'

const CleanUp: React.FC = () => {

    return(
        <div>
            <h4>CleanUp</h4>
            <a href="https://warm-oasis-21230.herokuapp.com/" target="_blank">
                <img className="app-image" src={cleanUpImg} alt="cleanup"></img>
            </a>
        </div>
    );
}

export default CleanUp;