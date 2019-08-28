import React from 'react';
import Spiffy from './Spiffy';
import RainCheck from './RainCheck';
import CleanUp from './CleanUp';
import Checkers from './Checkers'

const AllApps: React.FC = () => {

    return(
        <div>
            
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