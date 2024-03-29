import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./NewIdea.css";

export type Inputs = {
  title: string;
  desc: string;
};

const NewIdea = ({ handleAddIdea }: { handleAddIdea: Function }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleAddIdea(data);
    reset();
    inputRef.current?.focus();
  };

  return (
    <form id="new-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-container">
        <label className="input-label" htmlFor="title">
          Title
        </label>
        <input
          className="input-field"
          type="text"
          id="title-text"
          maxLength={40}
          placeholder="Enter your title"
          autoFocus
          {...register("title", {
            required: { value: true, message: "required" },
            maxLength: { value: 40, message: "40 characters max" },
          })}
        />
        {errors.title && <span className="form-error">{errors.title?.message}</span>}
      </div>
      <div className="input-container">
        <label className="input-label" htmlFor="desc">
          Description
        </label>
        <textarea
          className="input-field"
          id="desc"
          cols={30}
          rows={5}
          maxLength={140}
          placeholder="Enter your description"
          {...register("desc", {
            required: { value: true, message: "required" },
            maxLength: { value: 140, message: "140 characters max" },
          })}
        ></textarea>
        {errors.desc && <span className="form-error">{errors.desc?.message}</span>}
      </div>
      <button id="submit" className="btn">
        Create Idea
      </button>
    </form>
  );
};

export default NewIdea;
