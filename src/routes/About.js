import React from 'react';
import './About.css'; 
import { useLocation } from 'react-router-dom';



function About() {
    // console.log(props);
    let location = useLocation();
    console.log(location);
    return (
        <div className="about__container">
            <span>
                "Freedom is the freedom to say that two make four. If that is granted, all else follows."
            </span>
            <span>- Goerge Orwell, 1984</span>
        </div>
    );
}

export default About;