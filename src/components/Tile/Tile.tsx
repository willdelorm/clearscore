import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Idea } from "../../App";
import { Inputs } from "../NewIdea/NewIdea";
import "./Tile.css";

const Tile = ({
  tileData,
  handleDelete,
  handleUpdate,
}: {
  tileData: Idea;
  handleDelete: Function;
  handleUpdate: Function;
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const { id, title, desc, created } = tileData;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleUpdate(id, data.title, data.desc);
    setIsEditing(false);
  };

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
      <form className="tile-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="tile-input title"
          type="text"
          id="title"
          defaultValue={title}
          maxLength={40}
          {...register("title", {
            required: { value: true, message: "required" },
            maxLength: { value: 40, message: "40 characters max" },
          })}
          onChange={() => {
            setIsEditing(true);
          }}
        />
        {errors.title && <span className="form-error">{errors.title?.message}</span>}
        <textarea
          className="tile-input"
          id="desc"
          defaultValue={desc}
          maxLength={140}
          rows={3}
          {...register("desc", {
            required: { value: true, message: "required" },
            maxLength: { value: 140, message: "140 characters max" },
          })}
          onChange={() => {
            setIsEditing(true);
          }}
        />
        {errors.desc && <span className="form-error">{errors.desc?.message}</span>}
      {isEditing && (
        <button className="btn btn-edit">
          Update
        </button>
      )}
      </form>
    </div>
  );
};

export default Tile;
