import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./NewIdea.css";

export type Inputs = {
  title: string;
  desc: string;
};

const TITLE_MAX_LENGTH = 40;
const DESC_MAX_LENGTH = 140;

const NewIdea = ({ handleAddIdea }: { handleAddIdea: Function }) => {
  const [descLength, setDescLength] = useState<number>(DESC_MAX_LENGTH);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const watchDesc = watch("desc");

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleAddIdea(data);
    reset();
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (!watchDesc) {
      setDescLength(DESC_MAX_LENGTH);
    } else {
      setDescLength(DESC_MAX_LENGTH - watchDesc.length);
    }
  }, [watchDesc]);

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
          maxLength={TITLE_MAX_LENGTH}
          placeholder="Enter your title"
          autoFocus
          {...register("title", {
            required: { value: true, message: "required" },
            maxLength: { value: TITLE_MAX_LENGTH, message: `${TITLE_MAX_LENGTH} characters max` },
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
          maxLength={DESC_MAX_LENGTH}
          placeholder="Enter your description"
          {...register("desc", {
            required: { value: true, message: "required" },
            maxLength: { value: DESC_MAX_LENGTH, message: `${DESC_MAX_LENGTH} characters max` },
          })}
        ></textarea>
        {errors.desc && <span className="form-error">{errors.desc?.message}</span>}
        <span className="character-countdown" aria-disabled>{descLength}</span>
      </div>
      <button id="submit" className="btn">
        Create Idea
      </button>
    </form>
  );
};

export default NewIdea;
