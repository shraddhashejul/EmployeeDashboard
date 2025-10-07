import React, { useState, useMemo } from "react";
import { employees } from "./data/employees";
import EmployeeCard from "./components/EmployeeCard";
import FilterButtons from "./components/FilterButtons";
import "./App.css";

export default function App() {
  const [filterType, setFilterType] = useState(null);

  const filteredEmployees = useMemo(() => {
    if (!filterType) return employees;

    switch (filterType) {
      case "name":
        return employees.filter((e) => e.name.startsWith("A"));
      case "salary":
        return employees.filter((e) => e.salary > 45000);
      case "manager":
        return employees.filter((e) => e.role === "Manager");
      case "vp":
        return employees.filter((e) => e.role === "VP");
      default:
        return employees;
    }
  }, [filterType]);

  return (
    <div className="app-container">
      <h1>Employee Dashboard</h1>
      <FilterButtons onFilter={setFilterType} />

      <p className="count-text">
        Total Employees Found: <b>{filteredEmployees.length}</b>
      </p>

      <div className="employee-grid">
        {filteredEmployees.map((emp) => (
          <EmployeeCard key={emp.id} employee={emp} />
        ))}
      </div>
    </div>
  );
}
