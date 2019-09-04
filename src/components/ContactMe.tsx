import React from 'react';
import '../style/App.css';


const ContactMe: React.FC = () => {

    return(
        <div>
            <h3>Contact Info</h3>
            
            <a href="https://www.linkedin.com/in/adamgrunke" target="blank">LinkedIn</a>    
            <p>adam.grunke@gmail.com</p>
            <a href="https://github.com/adamgrunke" target="blank">GitHub</a>
            
            {/* <a href="https://github.com/adamgrunke" target="_blank" class="link">
                <i className="fab fa-github-square"></i>
            Github
        </a> */}

        </div>
    );
}

export default ContactMe;