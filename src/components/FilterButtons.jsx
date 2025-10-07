import React from "react";
import "./FilterButtons";


export default function FilterButtons({ onFilter }) {
  return (
    <div className="filter-buttons">
      <button onClick={() => onFilter("name")}>Name starts with 'A'</button>
      <button onClick={() => onFilter("salary")}>Salary 45000</button>
      <button onClick={() => onFilter("manager")}>Managers</button>
      <button onClick={() => onFilter("vp")}>VPs</button>
    </div>
  );
}