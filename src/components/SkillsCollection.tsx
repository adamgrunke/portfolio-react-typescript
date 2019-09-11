import React from 'react';
import '../style/App.css';


const SkillsCollection: React.FC = () => {

    return(
        <div>
            <h2>Technical Skills</h2>
            <i className="fab fa-react fa-5x"></i>
            <i className="fab fa-js-square fa-5x"></i>
            <i className="fab fa-css3 fa-5x"></i>
            <i className="fab fa-html5 fa-5x"></i>
            <i className="fab fa-node-js fa-5x"></i>
            {/* <i className="fab fa-js fa-5x"></i> */}
            
            <p> Typescript (TS) |   Express    |   Embedded Javascript (EJS)</p> 
            <p>Django	|   SQL |   Sequelize   |   PostgreSQL  |   Mongoose    |   MongoDB </p>
            <p>Git  |   GitHub  |   Heroku </p>            
        </div>
    );
}

export default SkillsCollection;