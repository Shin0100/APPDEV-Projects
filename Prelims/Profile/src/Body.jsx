import React from 'react';
import PropTypes from 'prop-types';

const Body = (props) => {
    return (
        <div className="container">
            <div className="person">
                <img 
                    src={props.profile}
                    alt="person-logo" 
                    className="person-picture" 
                />
                <p className="intro-text">Hi! I'm {props.name}</p>
                <p>
                    I'm a <strong>{props.proffesion}</strong> at <strong>{props.school}</strong>,<br /> 
                    pursuing a <strong>{props.course}</strong>. <br />
                    I'm <strong>{props.age}</strong> years old from <strong>{props.address}</strong>.
                </p><br />
                
                <h3>My Hobbies</h3>
                <ul >
                    {props.hobby.map((h, index) => (
                        <li key={index} className='hobb'>{h}</li>
                    ))}
                </ul>
                
                <div className="social-links" id="contacts">
                    <a href={props.mail} target="_blank" >Email</a>
                    <a href={props.twitter} target="_blank" >Twitter</a>
                    <a href={props.facebook} target="_blank" >Facebook</a>
                    <a href={props.github} target="_blank" >GitHub</a>
                </div>
            </div>
        </div>
    );
}

// Define default props
Body.defaultProps = {
    proffesion:"Student",
    profile: "https://imgcdn.stablediffusionweb.com/2024/5/1/f4b79de6-24f7-4d1d-a2e8-6de8a2338d86.jpg" ,
    name: "Jun",
    school: "University of Baguio",
    course: "Bachelor of Science in Information Technology",
    hobby: ["Photography", "Camping", "Hiking", "Puzzles and Games", "Traveling", "Music", "Team Sports"],
    age: 18,
    address: "Cordillera",
    twitter: "https://youtu.be/dQw4w9WgXcQ?si=ZZL-uyTDHkHh8gzX",
    facebook: "https://youtu.be/dQw4w9WgXcQ?si=ZZL-uyTDHkHh8gzX",
    github: "https://youtu.be/dQw4w9WgXcQ?si=ZZL-uyTDHkHh8gzX",
    mail: "mailto:pasingjun@gmail.com"
};

// Define prop types
Body.propTypes = {
    name: PropTypes.string,
    school: PropTypes.string,
    course: PropTypes.string,
    hobby: PropTypes.arrayOf(PropTypes.string),
    age: PropTypes.number,
    address: PropTypes.string
};

export default Body;
