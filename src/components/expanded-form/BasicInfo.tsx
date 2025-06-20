"use client";
import { useProject } from "@/context/ProjectContext";
import LabeledInput from "../LabeledInput";
import FormLayout from "../FormLayout";

const BasicInfo = () => {
  const { projectInfo, setProjectInfo } = useProject();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProjectInfo({ ...projectInfo, [e.target.name]: e.target.value });
  };

  return (
    <FormLayout>
      <LabeledInput
        label="Full Name"
        name="clientName"
        value={projectInfo.clientName}
        onChange={handleChange}
      />
      <LabeledInput
        label="Email"
        name="email"
        type="email"
        value={projectInfo.email}
        onChange={handleChange}
      />
      <LabeledInput
        label="Phone Number"
        name="phone"
        type="tel"
        value={projectInfo.phone}
        onChange={handleChange}
      />
      <LabeledInput
        label="Business Name/Organization"
        placeholder="Business Name/Organization (if applicable)"
        name="businessName"
        value={projectInfo.businessName}
        onChange={handleChange}
      />
      <LabeledInput
        label="Website"
        name="website"
        value={projectInfo.website}
        onChange={handleChange}
      />
      <LabeledInput
        label="Instagram Handle"
        name="instagram"
        value={projectInfo.instagram}
        onChange={handleChange}
      />
    </FormLayout>
  );
};

export default BasicInfo;
