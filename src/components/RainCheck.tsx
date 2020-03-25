import React from 'react';
// import raincheckImg from '../img/raincheck.png';
import '../style/App.css';


    function openRainCheckApp(e: React.MouseEvent): void {
        e.preventDefault()
        // const url: string = "https://fathomless-temple-87598.herokuapp.com"
        const url: string = "https://www.linkedin.com/in/adamgrunke/"
        window.open(url, 'blank')
    }

    return(
        <div>
            <h4 className="proj-title">Raincheck</h4>
            <a href="https://www.linkedin.com/in/adamgrunke/" target="_blank" rel="noopener noreferrer">
                <i className="projects fas fa-umbrella fa-size"></i>
            </a>
        </div>
    );
}

export default RainCheck;