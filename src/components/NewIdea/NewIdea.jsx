import React from "react";
import "./NewIdea.css";

const NewIdea = () => {
  return (
    <form id="new-form">
      <div className="input-container">
        <label className="input-label" htmlFor="title">
          Title
        </label>
        <input
          className="input-field"
          type="text"
          name="title"
          id="title-text"
          placeholder="Enter your title"
        />
      </div>
      <div className="input-container">
        <label className="input-label" htmlFor="desc">
          Description
        </label>
        <textarea
          className="input-field"
          name="desc"
          id="desc"
          cols="30"
          rows="10"
          placeholder="Enter your description"
        ></textarea>
      </div>
      <button id="submit" className="btn" type="submit">
        Create Idea
      </button>
    </form>
  );
};

export default NewIdea;
