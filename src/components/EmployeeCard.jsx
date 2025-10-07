
import React from "react";
import "./EmployeeCard.css";


export default function EmployeeCard({ employee }) {
  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <p>Role: {employee.role}</p>
      <p>Salary: ₹{employee.salary}</p>
    </div>
  );
}