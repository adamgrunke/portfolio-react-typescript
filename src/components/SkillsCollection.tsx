import React from 'react';
import '../style/App.css';


const SkillsCollection: React.FC = () => {

    return(
        <div>
            <h2>Technical Skills</h2>
            <i className="fab fa-react skill-font-size"></i>
            <i className="fab fa-js-square skill-font-size"></i>
            <i className="fab fa-css3 skill-font-size"></i>
            <i className="fab fa-html5 skill-font-size"></i>
            <i className="fab fa-node-js skill-font-size"></i>
            {/* <i className="fab fa-js skill-font-size"></i> */}
            <div className="skillsList">
                <p> Typescript (TS) |   Express    |   Embedded Javascript (EJS)</p> 
                <p>Django	|   SQL |   Sequelize   |   PostgreSQL  |   Mongoose    |   MongoDB </p>
                <p>Git  |   GitHub  |   Heroku </p>            
            </div>
        </div>
    );
}

export default SkillsCollection;