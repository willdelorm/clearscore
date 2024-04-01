import React, { useState } from "react";

import "./SortOptions.css";

const SortOptions = ({ handleSortIdeas }: { handleSortIdeas: Function }) => {
  const [sortOrder, setSortOrder] = useState("new-to-old");

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
        <option value="old-to-new">Oldest to newest</option>
        <option value="new-to-old">Newest to oldest</option>
        <option value="a-z">A - Z</option>
        <option value="z-a">Z - A</option>
      </select>
    </div>
  );
};

export default SortOptions;
