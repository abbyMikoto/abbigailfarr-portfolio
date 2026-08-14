import styles from "./page.module.css";
import { projects } from "@/data/projects";
import ProjectList from "@/components/project-list";

export default function ProjectsPage() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const engineeringProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <main className={styles.projects}>
      <section className={styles.projects__intro}>
        <span className={styles.projects__eyebrow}>
          SELECTED WORK / 2026
        </span>

        <h1 className={styles.projects__title}>
          SELECTED
          <br />
          WORK
        </h1>
      </section>

      <section className={styles.projects__group}>
        <span className={styles.projects__groupLabel}>
          FEATURED PROJECTS
        </span>

        <ProjectList projects={featuredProjects} />
      </section>

      <section className={styles.projects__group}>
        <span className={styles.projects__groupLabel}>
          ENGINEERING WORK
        </span>

        <ProjectList projects={engineeringProjects} />
      </section>
    </main>
  );
}