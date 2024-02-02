import "./Tile.css";
import { Idea } from "../../types/types";

const Tile = ({ data, handleDelete }: {data:Idea, handleDelete: Function}) => {
  const { id, title, desc, created, updated } = data;

  const displayDate = (updated ? updated : created).toLocaleTimeString();

  return (
    <div className="tile-container">
      <div className="tile-text">
        <h3 className="tile-title">{title}</h3>
        <p className="tile-desc">{desc}</p>
        <p className="tile-date">
          <i className="fa-regular fa-calendar"></i>
          {displayDate}
        </p>
      </div>
      <div className="btn-delete" onClick={() => handleDelete(id)}>
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  );
};

export default Tile;
