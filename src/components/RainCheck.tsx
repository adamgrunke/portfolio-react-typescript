import React from 'react';
import raincheckImg from '../img/raincheck.png'

const RainCheck: React.FC = () => {

    return(
        <div>
            <h4>Raincheck</h4>
            <a href="https://fathomless-temple-87598.herokuapp.com" target="_blank">
                <img className="app-image" src={raincheckImg} alt="raincheck"></img>
            </a>
        </div>
    );
}

export default RainCheck;