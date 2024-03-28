import { useState } from "react";
import { Idea } from "../../App";
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
  const [tileData, setTileData] = useState(data);
  const [isEditing, setIsEditing] = useState(false);

  const { id, title, desc, created } = tileData;

  const formatDate = (): string => {
    const date = tileData.updated ? tileData.updated : created;
    const formatter = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const formattedDate = formatter.format(date);
    return formattedDate;
  };

  return (
    <div className="tile-container">
      <header className="tile-header">
        <p className="tile-date">
          <i className="fa-regular fa-calendar"></i>
          {formatDate()}
        </p>
        <div className="btn-delete" onClick={() => handleDelete(id)}>
          <i className="fa-solid fa-trash"></i>
        </div>
      </header>
      <div className="tile-form">
        <input
          className="tile-input title"
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => {
            setTileData({ ...tileData, title: e.currentTarget.value });
            setIsEditing(true);
          }}
        />
        <textarea
          className="tile-input"
          name="desc"
          id="desc"
          value={desc}
          rows={3}
          onChange={(e) => {
            setTileData({ ...tileData, desc: e.currentTarget.value });
            setIsEditing(true);
          }}
        />
      </div>
      {isEditing && (
        <button
          className="btn btn-edit"
          onClick={() => {
            handleUpdate(id, tileData.title, tileData.desc);
            setIsEditing(false);
          }}
        >
          Update
        </button>
      )}
    </div>
  );
};

export default Tile;
