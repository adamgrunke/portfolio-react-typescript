import React from 'react';
import SkillsCollection from './SkillsCollection';
import Spiffy from './Spiffy';
import RainCheck from './RainCheck';
import CleanUp from './CleanUp';
import Checkers from './Checkers'

const AllApps: React.FC = () => {

    return(
        <div>
            <SkillsCollection/>
            <hr/>
            <Spiffy/>
            <hr/>
            <RainCheck/>
            <hr/>
            <CleanUp/>
            <hr/>
            <Checkers/>        
        </div>
    );
}

export default AllApps;