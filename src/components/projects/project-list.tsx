"use client";

import { useState } from "react";
import type { Project } from "@/data/types";
import ProjectDetail from "./project-detail";
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
            className={styles.projects__item}
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

              <span
                className={`${styles.projects__toggle} ${
                  isOpen
                    ? styles["projects__toggle--open"]
                    : ""
                }`}
              >
                +
              </span>
            </button>

            <div
              className={`${styles.projects__expand} ${
                isOpen
                  ? styles["projects__expand--open"]
                  : ""
              }`}
            >
              <div className={styles.projects__expandInner}>
                <ProjectDetail project={project} />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}