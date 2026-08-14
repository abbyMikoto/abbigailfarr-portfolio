"use client";

import { useState } from "react";
import type { Project } from "@/data/types";
import styles from "./project-list.module.css";

type ProjectListProps = {
  projects: Project[];
};

export default function ProjectList({
  projects,
}: ProjectListProps) {
  const [openProjectId, setOpenProjectId] =
    useState<string | null>(null);

  function toggleProject(id: string) {
    setOpenProjectId((current) =>
      current === id ? null : id
    );
  }

  return (
    <div className={styles.projects__index}>
      {projects.map((project) => {
        const isOpen = openProjectId === project.id;

        return (
          <article
            key={project.id}
            className={styles.project}
          >
            <button
              type="button"
              className={styles.projects__row}
              onClick={() => toggleProject(project.id)}
              aria-expanded={isOpen}
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

              <span className={styles.projects__toggle}>
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div
                className={`${styles.project__expandWrapper} ${
                    isOpen ? styles["project__expandWrapper--open"] : ""
                }`}
                >
                <div className={styles.project__expandInner}>
                    <div className={styles.project__expanded}>
                    <div className={styles.project__hero}>
                        <div className={styles.project__description}>
                        <span className={styles.project__label}>
                            OVERVIEW
                        </span>

                        <p>{project.overview}</p>
                        </div>

                        <div className={styles.project__meta}>
                        <div>
                            <span className={styles.project__label}>
                            ROLE
                            </span>
                            <p>{project.role}</p>
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

                        <div>
                            <span className={styles.project__label}>
                            YEAR
                            </span>
                            <p>{project.year}</p>
                        </div>
                        </div>
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
                </div>
                </div>
          </article>
        );
      })}
    </div>
  );
}