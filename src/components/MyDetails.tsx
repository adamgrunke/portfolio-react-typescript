import React from 'react';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe'
import '../style/App.css';

const MyDetails: React.FC = () => {

    return(
        <div>
            <div className="aboutme">
                <AboutMe/>
            </div>
            <hr/>
            <div className="contactme">
                <ContactMe/>
            </div>
        </div>
    );
}

export default MyDetails