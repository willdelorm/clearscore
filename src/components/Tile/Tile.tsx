import React, { useState } from "react";
import { Idea } from "../../types/types";
import "./Tile.css";

const Tile = ({
  data,
  handleDelete,
  handleUpdate,
}: {
  data: Idea;
  handleDelete: Function;
  handleUpdate: Function;
}) => {
  const { id, title, desc, created, updated } = data;
  const [editKey, setEditKey] = useState("");
  const [editValue, setEditValue] = useState("");

  const displayDate = updated.toString().split(" ").slice(1, 5).join(" ");
  const dateString =
    (updated > created ? "Updated on " : "Created on ") + displayDate;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setEditValue(e.currentTarget.value);

  const editView = (key: string) => (
    <div className="edit-container">
      <input
        className="edit-input"
        type="text"
        name={key}
        id={key}
        value={editValue}
        onChange={handleChange}
      />
      <button
        className="btn btn-edit"
        onClick={() => {
          handleUpdate(id, editKey, editValue);
          setEditKey("");
        }}
      >
        Update
      </button>
    </div>
  );

  const titleView =
    editKey === "title" ? (
      editView(editKey)
    ) : (
      <h3
        className="tile-title"
        onClick={() => {
          setEditValue(title);
          setEditKey("title");
        }}
      >
        {title}
      </h3>
    );

  const descView =
    editKey === "desc" ? (
      editView(editKey)
    ) : (
      <p
        className="tile-desc"
        onClick={() => {
          setEditValue(desc);
          setEditKey("desc");
        }}
      >
        {desc}
      </p>
    );

  return (
    <div className="tile-container">
      <div className="tile-text">
        {titleView}
        {descView}
        <p className="tile-date">
          <i className="fa-regular fa-calendar"></i>
          {dateString}
        </p>
      </div>
      <div className="btn-delete" onClick={() => handleDelete(id)}>
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  );
};

export default Tile;
