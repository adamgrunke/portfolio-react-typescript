import React from 'react';
// import raincheckImg from '../img/raincheck.png';
import '../style/App.css';


const RainCheck: React.FC = () => {

    return(
        <div>
            <h4 className="proj-title">Raincheck</h4>
            <a href="https://fathomless-temple-87598.herokuapp.com" target="_blank" rel="noopener noreferrer">
                <i className="projects fas fa-umbrella fa-size"></i>
            </a>
        </div>
    );
}

export default RainCheck;