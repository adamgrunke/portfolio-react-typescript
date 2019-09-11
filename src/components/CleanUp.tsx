import React from 'react';
// import cleanUpImg from '../img/cleanup.png';
import '../style/App.css';


const CleanUp: React.FC = () => {

    return(
        <div>
            <h4 className="proj-font-size">CleanUp</h4>
            <a href="https://warm-oasis-21230.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <i className="projects fas fa-syringe fa-size"></i>
            </a>
        </div>
    );
}

export default CleanUp;