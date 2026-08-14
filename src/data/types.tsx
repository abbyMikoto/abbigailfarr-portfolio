export type Project = {
  id: string;

  number: string;

  title: string;
  subtitle?: string;

  year: string;

  category: "Professional" | "Personal" | "Open Source";

  role: string;

  overview: string;

  challenge?: string;
  solution?: string;
  outcome?: string;
  lessonsLearned?: string;

  technologies: string[];

  image?: string;
  gallery?: string[];

  demoUrl?: string;
  githubUrl?: string;
};