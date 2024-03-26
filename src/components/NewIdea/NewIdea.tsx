import { useRef, useState } from "react";
import "./NewIdea.css";

export const INITIAL_FORM_DATA = {
  title: "",
  desc: "",
};

const NewIdea = ({ handleSubmit }: { handleSubmit: Function }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    handleSubmit(formData);
    setFormData(INITIAL_FORM_DATA);
    inputRef.current?.focus();
  };

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
          autoFocus
          ref={inputRef}
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
          rows={5}
          value={formData.desc}
          onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
          placeholder="Enter your description"
        ></textarea>
      </div>
      <button id="submit" className="btn" onClick={handleClick}>
        Create Idea
      </button>
    </div>
  );
};

export default NewIdea;
