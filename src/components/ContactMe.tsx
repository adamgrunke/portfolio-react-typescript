import React from 'react';
import '../style/App.css';


const ContactMe: React.FC = () => {

    return(
        <div>
            <h3>Contact Info</h3>
            
            <a href="https://www.linkedin.com/in/adamgrunke" target="blank">LinkedIn</a>    
            <p>adam.grunke@gmail.com</p>
            <a href="https://github.com/adamgrunke" target="blank">GitHub</a>

        </div>
    );
}

export default ContactMe;