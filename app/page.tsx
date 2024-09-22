"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormDataSchema } from "@/lib/schema";
import { Sidebar } from "@/components/Sidebar";
import { UserDetails } from "@/components/UserDetails";
import { Password } from "@/components/Password";
import { InviteTeam } from "@/components/InviteTeam";
import { AddSocials } from "@/components/AddSocials";
import { Done } from "@/components/Done";


type FormData = z.infer<typeof FormDataSchema>;

interface FormStep {
  id: string;
  title: string;
  fields: string[];
  description: string;
}

const formSteps: FormStep[] = [
  {
    id: "user-details",
    title: "Your details",
    description: "Please provide your name and email",
    fields: ["firstName", "lastName", "email"],
  },
  {
    id: "password",
    title: "Choose a password",
    description: "Must be at least 8 characters",
    fields: ["password", "confirmPassword"],
  },
  {
    id: "invite-team",
    title: "Invite your team",
    description: "Start collaborating with your team",
    fields: ["teammates"],
  },
  {
    id: "add-socials",
    title: "Add your socials",
    description: "Share posts to your social accounts",
    fields: ["socials"],
  },
  {
    id: "done",
    title: "All done!",
    description: "You're all set up",
    fields: [],
  },
];

export default function Home() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(FormDataSchema),
  });

  const processForm: SubmitHandler<FormData> = (data) => {
    setSubmitting(true);
    
    setTimeout(() => {
      console.log(data);
      reset();
      setSubmitting(false);
      setPreviousStep(currentStep);
      setCurrentStep(formSteps.length - 1);
    }, 2000);
  };

  type FieldName = keyof FormData;

  const next = async () => {
    const fields = formSteps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < formSteps.length - 2) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <UserDetails register={register} errors={errors} delta={delta} />
        );
      case 1:
        return (
          <Password
            register={register}
            errors={errors}
            watch={watch}
            delta={delta}
          />
        );
      case 2:
        return <InviteTeam register={register} errors={errors} delta={delta} />;
      case 3:
        return <AddSocials register={register} errors={errors} delta={delta} />;
      case 4:
        return <Done />;
      default:
        return null;
    }
  };

  return (
    <main className="flex w-full font-sans">
      <Sidebar formSteps={formSteps} currentStep={currentStep} />
      <div className="flex-grow flex items-center justify-center">
        <form
          onSubmit={handleSubmit(processForm)}
          className="w-96 overflow-hidden flex flex-col gap-4"
        >
          {renderFormStep()}

          {currentStep < formSteps.length - 1 && (
            <div className="flex justify-between">
              {currentStep > 0 && (
                <button
                  className="border border-gray-300 py-1 px-2 rounded-md
                  hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                  type="button"
                  onClick={prev}
                >
                  Back
                </button>
              )}
              {currentStep < formSteps.length - 2 && (
                <button
                  className="border border-gray-300 py-1 px-2 rounded-md
                  hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                  type="button"
                  onClick={next}
                >
                  Next
                </button>
              )}
              {currentStep === formSteps.length - 2 && (
                <button
                  className="border border-gray-300 py-1 px-4 rounded-md
               hover:bg-gray-100 transition-colors duration-200 ease-in-out flex items-center justify-center gap-2"
                  type="submit"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">
                        Submitting...
                      </span>
                      <svg
                        className="animate-spin h-5 w-5 text-primary"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2.25V4.75M12 18V22M5.75 12H2.25M21.25 12H19.75M18.4571 18.4571L17.75 17.75M18.6642 5.41579L17.25 6.83M4.92157 19.0784L7.75 16.25M5.12868 5.20868L7.25 7.33"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  ) : (
                    "Submit"
                  )}
                </button>
              )}
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
