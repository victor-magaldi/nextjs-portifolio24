import { ProjectCard } from "./ProjectCard";
import styles from "./styles.module.css";

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
            return <ProjectCard id={item} key={item} />;
          })}
        </div>
      </div>
    </section>
  );
}
