import React from "react";
import "./SortBy.css";

const SortBy = ({ sortBy, setSortBy }) => {
  return (
    <div className="sort">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="sort-sel"
      >
        <option value="default">Sort By</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
        <option value="name">Name (A-Z)</option>
        <option value="discount">Highest Discount</option>
      </select>
    </div>
  );
};

export default SortBy;
