import React from "react";
import LabeledInput from "../LabeledInput";
import { useProject } from "@/context/ProjectContext";
import FormLayout from "../FormLayout";

const heardAboutUsOptions = [
  "Instagram",
  "Facebook",
  "TikTok",
  "Youtube",
  "Google",
  "word of mouth",
];

const BudgetAndBooking = () => {
  const { projectInfo, setProjectInfo } = useProject();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProjectInfo({ ...projectInfo, [e.target.name]: e.target.value });
  };
  return (
    <FormLayout>
      <LabeledInput
        label="What's your approximate budget for this project?"
        placeholder="This helps us tailor a package for you."
        name="budget"
        value={projectInfo.budget}
        onChange={handleChange}
      />

      <h3 className="text-lg font-medium mb-2">
        How did you hear about us?
        <span className="text-sm block text-gray-500">
          (Check all that apply)
        </span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {heardAboutUsOptions.map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={option}
              checked={projectInfo.heardAboutUsBy.includes(option)}
              onChange={(e) => {
                const value = e.target.value;
                const newSelection = projectInfo.heardAboutUsBy.includes(value)
                  ? projectInfo.heardAboutUsBy.filter((item) => item !== value)
                  : [...projectInfo.heardAboutUsBy, value];
                setProjectInfo({
                  ...projectInfo,
                  heardAboutUsBy: newSelection,
                });
              }}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      {/* Other field */}
      <div className="mt-4">
        <label
          className="block text-sm font-medium mb-1"
          htmlFor="heardAboutUsByOther"
        >
          Other:
        </label>
        <input
          type="text"
          id="heardAboutUsByOther"
          name="heardAboutUsByOther"
          value={projectInfo.heardAboutUsByOther || ""}
          onChange={(e) =>
            setProjectInfo({
              ...projectInfo,
              heardAboutUsByOther: e.target.value,
            })
          }
          className="w-full border border-gray-300 p-2 rounded-xl"
          placeholder="How did you hear about us?"
        />
      </div>
    </FormLayout>
  );
};

export default BudgetAndBooking;
