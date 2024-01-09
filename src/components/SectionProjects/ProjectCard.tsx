import styles from "./styles.module.css";

export function ProjectCard({ id }: any) {
  return (
    <div className={styles.projectCard} id={String(id)}>
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
}
