import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { InputField } from "@/components/Input";
import { FormDataSchema } from "@/lib/schema";
import z from "zod";
import OrDivider from "@/components/OrDivider";
type FormData = z.infer<typeof FormDataSchema>;

interface AddSocialsProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  delta: number;
}

export function AddSocials({ register, errors, delta }: AddSocialsProps) {
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
              d="M12.9996 10.9999L3.49964 20.4999M14.0181 3.53838C15.2361 4.34658 16.4068 5.29941 17.5008 6.3934C18.6042 7.49683 19.564 8.67831 20.3767 9.90766M9.2546 7.89605L6.37973 6.93776C6.04865 6.8274 5.68398 6.89763 5.41756 7.12306L2.56041 9.54065C1.97548 10.0356 2.14166 10.9775 2.86064 11.2424L5.56784 12.2398M11.6807 18.3524L12.6781 21.0596C12.943 21.7786 13.8849 21.9448 14.3798 21.3599L16.7974 18.5027C17.0228 18.2363 17.0931 17.8716 16.9827 17.5405L16.0244 14.6657M19.3482 2.27063L14.4418 3.08838C13.9119 3.17668 13.426 3.43709 13.0591 3.82932L6.446 10.8985C4.73185 12.7308 4.77953 15.5924 6.55378 17.3667C8.32803 19.1409 11.1896 19.1886 13.022 17.4744L20.0911 10.8614C20.4834 10.4944 20.7438 10.0085 20.8321 9.47869L21.6498 4.57222C21.8754 3.21858 20.7019 2.04503 19.3482 2.27063Z"
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
            Add your socials
          </h1>
          <p className="text-center text-gray-500">
            Share your posts to your social accounts
          </p>
        </div>
      </div>
      <div className="my-6">
        <OrDivider />
      </div>
      <div className="flex flex-col gap-4">
        <InputField
          label="Twitter"
          id="socials.twitter"
          type="url"
          register={register}
          error={errors.socials?.twitter}
        />
        <InputField
          label="Facebook"
          id="socials.facebook"
          type="url"
          register={register}
          error={errors.socials?.facebook}
        />
        <InputField
          label="LinkedIn"
          id="socials.linkedin"
          type="url"
          register={register}
          error={errors.socials?.linkedin}
        />
      </div>
    </div>
  );
}

