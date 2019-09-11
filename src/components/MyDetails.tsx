import React from 'react';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe'
import '../style/App.css';

const MyDetails: React.FC = () => {

    return(
        <div>
            <div>
                <AboutMe/>
            </div>
            <hr/>
            <div>
                <ContactMe/>
            </div>
        </div>
    );
}

export default MyDetails