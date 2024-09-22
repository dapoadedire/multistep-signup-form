import { FieldError, UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  error?: FieldError;
  validate?: (value: string) => boolean | string;
}

export function InputField({
  label,
  id,
  type = "text",
  register,
  required = false,
  error,
  placeholder,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-bold" htmlFor={id}>
        {label}
        {required && <span>*</span>}
      </label>
      <input
        className={`
          font-light 
          block w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary/15 focus:border-primary/45 sm:text-sm
        `}
        type={type}
        id={id}
        required={required} // Set required based on the passed prop
        placeholder={placeholder}
        {...register(id, { required })} // Pass `required` validation to react-hook-form
        autoComplete={type === "password" ? "new-password" : "off"}
      />
      {error && (
        <p
          className="
          slide-in-bottom
          text-red-500 text-xs leading-[0.5rem]"
        >
          {error.message}
        </p>
      )}
    </div>
  );
}
