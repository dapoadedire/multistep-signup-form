import React from "react";
import { UseFormRegister, FieldErrors, UseFormWatch } from "react-hook-form";
import { InputField } from "@/components/Input";
import { FormDataSchema } from "@/lib/schema";
import  OrDivider  from "@/components/OrDivider";
import { z } from "zod";

type FormData = z.infer<typeof FormDataSchema>;

interface PasswordProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  watch: UseFormWatch<FormData>;
  delta: number;
}

function Password({ register, errors, watch, delta }: PasswordProps): JSX.Element {
  const password = watch("password");

  return (
    <div className={`
      ${delta === 1 ? "slide-in-right" : delta === -1 ? "slide-in-left" : ""}`}
    >
      <div className="flex flex-col gap-4 items-center">
        <div className="border w-min rounded-md p-2">
          <svg
            className="w-4 h-4"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex  flex-col gap-3">
          <h1
            className="text-center
          font-bold text-2xl
        "
          >
            Choose a password
          </h1>
          <p className="text-center text-gray-500">
            Password must be at least 8 characters long
          </p>
        </div>
      </div>
      <div className="my-6">
        <OrDivider />
      </div>
      <div className="flex flex-col gap-4">
        <InputField
          label="Password"
          id="password"
          required
          placeholder="Choose a password"
          type="password"
          register={register}
          error={errors.password}
        />
        <InputField
          label="Confirm Password"
          id="confirmPassword"
          required
          placeholder="Confirm password"
          type="password"
          register={register}
          error={errors.confirmPassword}
          validate={(value) => value === password || "Passwords do not match"}
        />
      </div>
    </div>
  );
}

export { Password };