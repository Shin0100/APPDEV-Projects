import React from 'react';
import { Link } from 'react-router-dom';
import './CompanyProfile.css'; 
export const CompanyProfile = ({ employees, developers }) => {
  return (
    <div className="company-profile">
      <h1>Our Team</h1>
      <div className="grid-container">
        {employees.map((employee) => (
          <Link to={`/employee/${employee.id}`} key={employee.id} className="team-card-link">
            <div className="team-card">
              
              <h2>{employee.name}</h2>
              <p>{employee.position}</p>
            </div>
          </Link>
        ))}
      </div>
      <hr />
      <h1>Our Developers</h1>
      <div className="grid-container">
        {developers.map((developer) => (
          <Link to={`/developers/${developer.id}`} key={developer.id} className="team-card-link">
            <div className="team-card">
              <h2>{developer.name}</h2>
              <p>{developer.position}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
