import React, { useState } from "react";
import "./SortOptions.css";

const SortOptions = ({ handleSortIdeas }: { handleSortIdeas: Function }) => {
  const [sortOrder, setSortOrder] = useState("newest-to-oldest");

  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const newSortOrder = e.currentTarget.value;
    setSortOrder(newSortOrder);
    handleSortIdeas(newSortOrder);
  };

  return (
    <div className="sort-container">
      <span>Sort by: </span>
      <select
        name="sortSelect"
        id="sortSelect"
        value={sortOrder}
        onChange={handleChange}
      >
        <option value="newest-to-oldest">Newest to oldest</option>
        <option value="alphabetically">Alphabetically</option>
      </select>
    </div>
  );
};

export default SortOptions;
