// components/InviteTeam.tsx
import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { InputField } from "@/components/Input";
import { FormDataSchema } from "@/lib/schema";
import OrDivider from "@/components/OrDivider";
import z from "zod";
type FormData = z.infer<typeof FormDataSchema>;

interface InviteTeamProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  delta: number;
}

export function InviteTeam({ register, errors, delta }: InviteTeamProps) {
  return (
    <div className={`
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
              d="M19 21V15M16 18H22M12 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
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
            Invite your team
          </h1>
          <p className="text-center text-gray-500">
            Start collaborating with your team
          </p>
        </div>
      </div>
      <div className="my-6">
        <OrDivider />
      </div>
      <div className="flex flex-col gap-4">
        <InputField
          label="Teammate 1"
          id="teammates.0.email"
          type="email"
          register={register}
          error={errors.teammates?.[0]?.email}
        />
        <InputField
          label="Teammate 2"
          id="teammates.1.email"
          type="email"
          register={register}
          error={errors.teammates?.[1]?.email}
        />
        <InputField
          label="Teammate 3"
          id="teammates.2.email"
          type="email"
          register={register}
          error={errors.teammates?.[2]?.email}
        />
      </div>
    </div>
  );
}


