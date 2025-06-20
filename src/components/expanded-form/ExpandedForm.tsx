"use client";
import { useState } from "react";
import { initialProjectInfo, useProject } from "@/context/ProjectContext";
import BasicInfo from "./BasicInfo";
import ProjectDetails from "./ProjectDetails";
import BudgetAndBooking from "./BudgetAndBooking";

type FormStep = number;

const ExpandedForm = () => {
  const { projectInfo, setProjectInfo } = useProject();

  const [formStep, setFormStep] = useState<FormStep>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBack = () => {
    if (formStep > 0) {
      setFormStep(formStep - 1);
    }
  };

  const handleContinue = async () => {
    if (formStep < 2) {
      setFormStep(formStep + 1);
    } else {
      setIsSubmitting(true);
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(projectInfo),
        });

        if (res.ok) {
          setProjectInfo(initialProjectInfo);
          setIsSubmitted(true);
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (err) {
        console.log(err);
        alert("An error occurred. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const getFormHeading = (step: FormStep) => {
    if (step === 0) {
      return "Basic Info";
    }

    if (step == 1) {
      return "Projet Details";
    }

    return "Budget & Booking";
  };

  const getContinueButtonLabel = (step: FormStep, submitStatus: boolean) => {
    if (step === 2) {
      if (submitStatus) {
        return "SUBMITTING...";
      } else {
        return "SUBMIT";
      }
    } else {
      return "CONTINUE";
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-green-600 mb-2">
          🎉 Thank you!
        </h2>
        <p className="text-lg text-gray-700">
          Your inquiry has been sent successfully. We’ll be in touch soon!
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4">{getFormHeading(formStep)}</h2>
      {formStep === 0 && <BasicInfo />}
      {formStep === 1 && <ProjectDetails />}
      {formStep === 2 && <BudgetAndBooking />}

      <div className="flex space-x-4 mt-4">
        <button
          type="button"
          onClick={handleBack}
          className="w-full bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-500 transition"
        >
          BACK
        </button>
        <button
          type="button"
          onClick={handleContinue}
          disabled={isSubmitting}
          className={`w-full py-3 rounded-xl font-semibold transition ${
            isSubmitting
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-500"
          }`}
        >
          {getContinueButtonLabel(formStep, isSubmitting)}
        </button>
        <div></div>
      </div>
    </div>
  );
};

export default ExpandedForm;
