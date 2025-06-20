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

  const handleBack = () => {
    if (formStep > 0) {
      setFormStep(formStep - 1);
    }
  };

  const handleContinue = async () => {
    if (formStep < 2) {
      setFormStep(formStep + 1);
    } else {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(projectInfo),
        });

        if (res.ok) {
          alert("Inquiry sent!");
          setProjectInfo(initialProjectInfo);
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (err) {
        console.log(err);
        alert("An error occurred. Please try again.");
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
          className="w-full bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-500 transition"
        >
          {formStep === 2 ? "SUBMIT" : "CONTINUE"}
        </button>
        <div></div>
      </div>
    </div>
  );
};

export default ExpandedForm;
