"use client";
import { useProject } from "@/context/ProjectContext";
import React from "react";
import LabeledInput from "../LabeledInput";
import FormLayout from "../FormLayout";

const videoOptions = [
  "Event (Wedding, Birthday, Party, etc.)",
  "Business Promo / Brand Video",
  "Restaurant / Food Content",
  "Product Video",
  "Fitness / Lifestyle",
  "Interview / Testimonial",
  "Music Video",
  "Real Estate",
];

const platformOptions = [
  "Instagram",
  "Facebook",
  "TikTok",
  "Youtube",
  "website",
];

const ProjectDetails = () => {
  const { projectInfo, setProjectInfo } = useProject();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProjectInfo({ ...projectInfo, [e.target.name]: e.target.value });
  };

  return (
    <FormLayout>
      <h3 className="text-lg font-medium mb-2">
        What type of video content do you need?
        <span className="text-sm block text-gray-500">
          (Check all that apply)
        </span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {videoOptions.map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={option}
              checked={projectInfo.projectType.includes(option)}
              onChange={(e) => {
                const value = e.target.value;
                const newSelection = projectInfo.projectType.includes(value)
                  ? projectInfo.projectType.filter((item) => item !== value)
                  : [...projectInfo.projectType, value];
                setProjectInfo({ ...projectInfo, projectType: newSelection });
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
          htmlFor="otherProjectType"
        >
          Other:
        </label>
        <input
          type="text"
          id="otherProjectType"
          name="otherProjectType"
          value={projectInfo.otherProjectType || ""}
          onChange={(e) =>
            setProjectInfo({ ...projectInfo, otherProjectType: e.target.value })
          }
          className="w-full border border-gray-300 p-2 rounded-xl"
          placeholder="Describe other video needs"
        />
      </div>

      <LabeledInput
        label="Briefly describe your project or event"
        placeholder="What’s happening, what should be captured, and what’s the goal?"
        name="description"
        value={projectInfo.description}
        onChange={handleChange}
        isTextArea
        required
      />

      <LabeledInput
        label="Date Needed"
        placeholder="What’s the date of the event or preferred shoot date(s)?"
        name="date"
        value={projectInfo.date}
        onChange={handleChange}
        required
      />

      <LabeledInput
        label="What's the location or venue?"
        placeholder="Include the city and specific address if known."
        name="location"
        value={projectInfo.location}
        onChange={handleChange}
        required
      />

      <LabeledInput
        label="Who is your target audience for this video?"
        name="targetAudience"
        value={projectInfo.targetAudience}
        onChange={handleChange}
        required
      />

      <h3 className="text-lg font-medium mb-2">
        What platform(s) will this video be shared on?
        <span className="text-sm block text-gray-500">
          (Check all that apply)
        </span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {platformOptions.map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={option}
              checked={projectInfo.platforms.includes(option)}
              onChange={(e) => {
                const value = e.target.value;
                const newSelection = projectInfo.platforms.includes(value)
                  ? projectInfo.platforms.filter((item) => item !== value)
                  : [...projectInfo.platforms, value];
                setProjectInfo({ ...projectInfo, platforms: newSelection });
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
          htmlFor="otherPlatform"
        >
          Other:
        </label>
        <input
          type="text"
          id="otherPlatform"
          name="otherPlatform"
          value={projectInfo.otherPlatform || ""}
          onChange={(e) =>
            setProjectInfo({ ...projectInfo, otherPlatform: e.target.value })
          }
          className="w-full border border-gray-300 p-2 rounded-xl"
          placeholder="Describe other platform"
        />
      </div>

      <LabeledInput
        label="Do you have a specific style or reference video you like?"
        placeholder="Link(s) to videos and/or reels are helpful."
        name="references"
        value={projectInfo.references}
        onChange={handleChange}
        required
      />
    </FormLayout>
  );
};

export default ProjectDetails;
