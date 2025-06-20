export type ProjectInfo = {
  clientName: string;
  email: string;
  phone: string;
  description: string;
  businessName: string;
  website: string;
  instagram: string;
  projectType: string[];
  otherProjectType?: string; // For custom input
  date: string;
  location: string;
  targetAudience: string;
  platforms: string[];
  otherPlatform: string;
  references: string;
  budget: string;
  heardAboutUsBy: string[];
  heardAboutUsByOther: string;
};
