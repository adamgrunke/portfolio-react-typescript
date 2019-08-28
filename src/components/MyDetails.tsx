import React from 'react';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe'
import SkillsCollection from './SkillsCollection';

const MyDetails: React.FC = () => {

    return(
        <div>
            <AboutMe/>
            <ContactMe/>
            <hr/>
            <SkillsCollection/>
        </div>
    );
}

export default MyDetails