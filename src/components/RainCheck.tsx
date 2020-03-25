import React from 'react';
// import raincheckImg from '../img/raincheck.png';
import '../style/App.css';


<<<<<<< HEAD
    function openRainCheckApp(e: React.MouseEvent): void {
        e.preventDefault()
        // const url: string = "https://fathomless-temple-87598.herokuapp.com"
        const url: string = "https://www.linkedin.com/in/adamgrunke/"
        window.open(url, 'blank')
    }
=======
const RainCheck: React.FC = () => {
>>>>>>> 5f0bd0a377f5bc60769c08af7ec513670816c098

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