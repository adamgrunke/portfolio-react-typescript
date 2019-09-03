import React from 'react';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe'
import SkillsCollection from './SkillsCollection';
import '../style/App.css';

const MyDetails: React.FC = () => {

    return(
        <div className="mydetails">
            <AboutMe/>
            <hr/>
            <SkillsCollection/>
            <hr/>
            <ContactMe/>
        </div>
    );
}

export default MyDetails