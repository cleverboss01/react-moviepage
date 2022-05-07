import React from "react";

const Filter = ({ onFilter }) => {
  return (
    <div>
      <button className="btn btn-success" onClick={onFilter}>
        Filter
      </button>
    </div>
  );
};

export default Filter;
