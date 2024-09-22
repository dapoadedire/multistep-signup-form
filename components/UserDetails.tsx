// components/UserDetails.tsx
import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { InputField } from "@/components/Input";
import { FormDataSchema } from "@/lib/schema";
import z from "zod";
import {GoogleLogo} from "@/components/GoogleLogo";
import OrDivider from "@/components/OrDivider";

type FormData = z.infer<typeof FormDataSchema>;

interface UserDetailsProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  delta: number;
}

export function UserDetails({ register, errors, delta }: UserDetailsProps) {
  return (
    <div
      className={`
      ${delta === 1 ? "slide-in-right" : delta === -1 ? "slide-in-left" : ""}`}
    >
      <div className="flex flex-col gap-4 items-center">
        <div className="border w-min rounded-md p-2">
          <svg
            className="w-4 h-4 "
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-col gap-3">
          <h1
            className="text-center
            font-bold text-2xl
          "
          >
            Your details
          </h1>
          <p className="text-center text-gray-500">
            Please provide your name and email
          </p>
        </div>

        <div className="w-full">
          <button
            className="
          hover:bg-gray-100
           transition-colors duration-200 ease-in-out
          transition-border-300ms
          shadow-sm
          w-full border border-gray-400 rounded-full p-2 flex items-center gap-2 justify-center"
          >
            <span>
              <GoogleLogo size={5} />
            </span>
            <span className="text-sm font-bold">Sign up with Google</span>
          </button>
        </div>
      </div>
      <div className="my-6">
        <OrDivider />
      </div>
      <div className="flex flex-col gap-4">
        <InputField
          label="First name"
          id="firstName"
          required
          placeholder="Enter your first name"
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Last name"
          id="lastName"
          required
          placeholder="Enter your last name"
          register={register}
          error={errors.lastName}
        />
        <InputField
          label="Email"
          id="email"
          required
          placeholder="Enter your email"
          type="email"
          register={register}
          error={errors.email}
        />
      </div>
    </div>
  );
}
