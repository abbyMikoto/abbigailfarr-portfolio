import styles from "./page.module.css";
import { projects } from "@/data/projects";

const projectGroups = [
  {
    title: "FEATURED PROJECTS",
    items: projects.filter((project) => project.featured),
  },
  {
    title: "ENGINEERING WORK",
    items: projects.filter((project) => !project.featured),
  },
];

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

      {projectGroups.map((group) => (
        <section
          key={group.title}
          className={styles.projects__group}
        >
          <span className={styles.projects__groupLabel}>
            {group.title}
          </span>

          <div className={styles.projects__index}>
            {group.items.map((project) => (
              <a
                key={project.id}
                href={`#${project.id}`}
                className={styles.projects__row}
              >
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
                  View Project →
                </span>
              </a>
            ))}
          </div>
        </section>
      ))}

      <section className={styles.projects__details}>
        {projectGroups.map((group) => (
          <div
            key={group.title}
            className={styles.projects__detailGroup}
          >
            <div className={styles.projects__detailHeading}>
              {group.title}
            </div>

            {group.items.map((project) => (
              <article
                key={project.id}
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

                      <p>
                        {project.technologies.join(" / ")}
                      </p>
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
                </div>
              </article>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}