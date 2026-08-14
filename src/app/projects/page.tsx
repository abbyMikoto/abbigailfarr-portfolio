import styles from "./page.module.css";

import { projects } from "@/data/projects";
import ProjectDetail from "@/components/projects/project-detail";

export default function ProjectsPage() {

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
          ENGINEERING WORK
        </span>

        <div className={styles.projects__index}>
          {projects.map((project) => (
            <a key={project.id} href={`#${project.id}`} className={styles.projects__row} >
              <span className={styles.projects__number}>
                {project.number}
              </span>

              <div className={styles.projects__rowMain}>
                <h2>{project.title}</h2>
                <span>{project.category}</span>
              </div>

              <span className={styles.projects__year}>
                {project.year}
              </span>

              <span className={styles.projects__view}>
                View Details →
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.projects__details}>

        {projects.map((project) => (
          <ProjectDetail
            key={project.id}
            project={project}
          />
        ))}
      </section>
    </main>
  );
}