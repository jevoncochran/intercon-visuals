import React from "react";
import ExpandedForm from "@/components/expanded-form/ExpandedForm";

const ProjectDetailsPage = () => {
  return (
    <div className="flex flex-col items-center px-6">
      <div className="flex flex-col items-center md:w-[50%]">
        <h2 className="mb-6">Help Us Capture Your Vision</h2>
        <p className="mb-4">
          Thanks for choosing Intercon Visuals! To help us plan and deliver the
          perfect video for your project, please fill out the questionnaire
          below. This only takes a few minutes and ensures we capture exactly
          what you want.
        </p>
        <ExpandedForm />
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
