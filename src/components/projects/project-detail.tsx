import type { Project } from "@/data/types";
import styles from "./project-detail.module.css";

type ProjectDetailProps = {
  project: Project;
};

export default function ProjectDetail({
  project,
}: ProjectDetailProps) {
  return (
    <article
      id={project.id}
      className={styles.project}
    >
      <div className={styles.project__header}>
        <span>{project.number}</span>
        <span>{project.category}</span>
      </div>

      <div className={styles.project__hero}>
        <h2 className={styles.project__title}>
          {project.title}
        </h2>

        <div className={styles.project__meta}>
          <div>
            <span className={styles.project__label}>
              ROLE
            </span>

            <p>{project.role}</p>
          </div>

          <div>
            <span className={styles.project__label}>
              YEAR
            </span>

            <p>{project.year}</p>
          </div>

          <div>
            <span className={styles.project__label}>
              TECHNOLOGIES
            </span>

            <ul className={styles.project__technologies}>
              {project.technologies.map((technology) => (
                <li key={technology}>
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.project__body}>
        <div className={styles.project__description}>
          <span className={styles.project__label}>
            OVERVIEW
          </span>

          <p>{project.overview}</p>
        </div>

        <div className={styles.project__actions}>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo ↗
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          )}
        </div>

        {/* {project.image && (
        <div className={styles.project__image}>
          <img
            src={project.image}
            alt={`${project.title} preview`}
          />
        </div>
      )} */}
      </div>
    </article>
  );
}