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
  const [editingTitle, setEditingTitle] = useState(false);
  const [editingDescription, setEditingDescription] = useState(false);

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
      <div className="tile-text">
        {!editingTitle ? (
          <h3
            className="tile-title"
            onClick={() => {
              setEditingTitle(true);
            }}
          >
            {title}
          </h3>
        ) : (
          <div className="edit-container">
            <input
              className="edit-input"
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) =>
                setTileData({ ...tileData, title: e.currentTarget.value })
              }
            />
            <button
              className="btn btn-edit"
              onClick={() => {
                handleUpdate(id, "title", title);
                setEditingTitle(false);
              }}
            >
              Update
            </button>
          </div>
        )}
        {!editingDescription ? (
          <h3
            className="tile-desc"
            onClick={() => {
              setEditingDescription(true);
            }}
          >
            {desc}
          </h3>
        ) : (
          <div className="edit-container">
            <textarea
              className="edit-input"
              name="desc"
              id="desc"
              value={desc}
              onChange={(e) =>
                setTileData({ ...tileData, desc: e.currentTarget.value })
              }
            />
            <button
              className="btn btn-edit"
              onClick={() => {
                handleUpdate(id, "desc", desc);
                setEditingDescription(false);
              }}
            >
              Update
            </button>
          </div>
        )}
        <p className="tile-date">
          <i className="fa-regular fa-calendar"></i>
          {formatDate()}
        </p>
      </div>
      <div className="btn-delete" onClick={() => handleDelete(id)}>
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  );
};

export default Tile;
