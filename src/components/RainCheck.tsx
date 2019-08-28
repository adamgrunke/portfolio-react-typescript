import React from 'react';
import raincheckImg from '../img/raincheck.png'

const RainCheck: React.FC = () => {

    function openRainCheckApp(e: React.MouseEvent): void {
        e.preventDefault()
        const url: string = "https://fathomless-temple-87598.herokuapp.com"
        window.open(url, 'blank')
    }

    return(
        <div>
            <h4>Raincheck</h4>
            <img className="app-image" src={raincheckImg} alt="raincheck"></img>
            <button onClick={openRainCheckApp}>Open the RainCheck App</button>
        </div>
    );
}

export default RainCheck;