import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export const EmployeeDetail = ({ employees,developers }) => {
  const { id } = useParams();
  
  const employeeId = parseInt(id);

  const filteredEmployees = employees.filter(e => e.id === employeeId);
  const employee = filteredEmployees.length > 0 ? filteredEmployees[0] : null;

  const [vouchPoints, setVouchPoints] = useState(0);

  const handleVouch = () => {
    setVouchPoints(vouchPoints + 1);
  };

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div className='card1'>
      <h1>Employee Resume</h1>
      <div>
      <img src={employee.imageUrl} alt="imglol" />
        <h2>{employee.name}</h2>
        <p>Position: {employee.position}</p>
        <p>Bio: {employee.bio}</p>
        <p>Email: <a href="">{employee.email}</a></p>
        
        <br /><button>
        <Link to="/company">Back to Company Profile</Link></button>
      </div>
    </div>
  );
};
