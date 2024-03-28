import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./NewIdea.css";

type Inputs = {
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
          Title {errors.title && <span>{errors.title?.message}</span>}
        </label>
        <input
          className="input-field"
          type="text"
          id="title-text"
          placeholder="Enter your title"
          autoFocus
          {...register("title", {
            required: { value: true, message: "required" },
            maxLength: { value: 40, message: "40 characters max" },
          })}
        />
      </div>
      <div className="input-container">
        <label className="input-label" htmlFor="desc">
          Description {errors.desc && <span>{errors.desc?.message}</span>}
        </label>
        <textarea
          className="input-field"
          id="desc"
          cols={30}
          rows={5}
          placeholder="Enter your description"
          {...register("desc", {
            required: { value: true, message: "required" },
            maxLength: { value: 140, message: "140 characters max" },
          })}
        ></textarea>
      </div>
      <button id="submit" className="btn">
        Create Idea
      </button>
    </form>
  );
};

export default NewIdea;
