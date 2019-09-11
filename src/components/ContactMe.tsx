import React from 'react';
import '../style/App.css';


const ContactMe: React.FC = () => {

    return(
        <div>
            <a className="contact-me-links"
                href="https://www.linkedin.com/in/adamgrunke" 
                target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-2x"></i>
            </a> {" "}   
            <a className="contact-me-links"
                href=" mailto: adam.grunke@gmail.com">
                <i className="fas fa-envelope-open fa-2x"></i>
            </a> {" "}  
            <a className="contact-me-links"
                href="https://github.com/adamgrunke" 
                target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github fa-2x"></i>
            </a> {" "}  
            <a className="contact-me-links"
                href="https://drive.google.com/open?id=1Bj6VsHwNyDiU7x9hCnkq454ZTDF9qcof" 
                target="_blank" rel="noopener noreferrer">
                <i className="fas fa-file fa-2x"></i>
            </a> 

        </div>
    );
}

export default ContactMe;