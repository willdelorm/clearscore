import { useState } from "react";
import "./NewIdea.css";

const INITIAL_FORM_DATA = {
  title: "",
  desc: "",
};

const NewIdea = ({ handleSubmit }: {handleSubmit: Function}) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  return (
    <div id="new-form">
      <div className="input-container">
        <label className="input-label" htmlFor="title">
          Title
        </label>
        <input
          className="input-field"
          type="text"
          name="title"
          id="title-text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
          cols={30}
          rows={10}
          value={formData.desc}
          onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
          placeholder="Enter your description"
        ></textarea>
      </div>
      <button
        id="submit"
        className="btn"
        onClick={() => handleSubmit(formData)}
      >
        Create Idea
      </button>
    </div>
  );
};

export default NewIdea;
