import "./SortOptions.css";

const SortOptions = () => {
  return (
    <div className="sort-container">
      <span>Sort by: </span>
      <select name="sortSelect" id="sortSelect">
        <option value="date-new-to-old">Newest to oldest</option>
        <option value="alphabetically">A - Z</option>
      </select>
    </div>
  );
};

export default SortOptions;
