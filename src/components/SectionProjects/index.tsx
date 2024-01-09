"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { useSearchParams } from "next/navigation";

export function SectionProjects() {
  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <h2>Projetos</h2>
        <p>
          Projetos desenvolvidos ao longo da minha jornada de estudo e trabalho
        </p>
        <div className={styles.projectLists}>
          {Array.from({ length: 12 }, (_, index) => index).map((item) => {
            return (
              <div
                className={styles.projectCard}
                key={String(item)}
                id={String(item)}
              >
                <div className={styles.containerProjectCardImg}>
                  <img
                    src="https://placehold.co/250?text=Projeto1"
                    className={styles.projectCardImg}
                    alt="Projeto1"
                  />
                </div>

                <h4 className={styles.projectName}>Projeto 1 </h4>
                <button className="">Ver mais</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
