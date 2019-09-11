import React from 'react';
import '../style/App.css';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';


const Header: React.FC = () => {
    
    return (
        <div>
            <AboutMe/>
            <hr/>
            <ContactMe/>

        </div>
    );
    }

    export default Header;