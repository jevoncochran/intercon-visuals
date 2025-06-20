"use client";
import { ProjectInfo } from "@/types";
import { createContext, useContext, useState } from "react";

export const initialProjectInfo: ProjectInfo = {
  clientName: "",
  email: "",
  phone: "",
  description: "",
  businessName: "",
  website: "",
  instagram: "",
  projectType: [],
  otherProjectType: "",
  date: "",
  location: "",
  targetAudience: "",
  platforms: [],
  otherPlatform: "",
  references: "",
  budget: "",
  heardAboutUsBy: [],
  heardAboutUsByOther: "",
};

const ProjectContext = createContext<{
  projectInfo: ProjectInfo;
  setProjectInfo: React.Dispatch<React.SetStateAction<ProjectInfo>>;
}>({ projectInfo: initialProjectInfo, setProjectInfo: () => {} });

export const ProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [projectInfo, setProjectInfo] =
    useState<ProjectInfo>(initialProjectInfo);

  return (
    <ProjectContext.Provider value={{ projectInfo, setProjectInfo }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);
