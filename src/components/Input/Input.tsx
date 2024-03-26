import { useFormContext } from "react-hook-form";
import { isFormInvalid } from "../../utils/isFormInvalid";
import { findInputError } from "../../utils/findInputError";
import { AnimatePresence, motion } from "framer-motion";
import { MdError } from "react-icons/md";

const Input = ({ name, label }: { name: string; label: string }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  return (
    <div className="input-container">
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <AnimatePresence mode="wait" initial={false}>
        {isInvalid && (
          <InputError
            message={inputErrors.error.message}
            key={inputErrors.error.message}
          />
        )}
      </AnimatePresence>
      <input
        className="input-field"
        type="text"
        name={name}
        id="title-text"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        placeholder="Enter your title"
        autoFocus
        ref={inputRef}
      />
    </div>
  );
};

const InputError = ({ message }: { message: string }) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

export default Input;
