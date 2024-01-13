import styles from "./styles.module.css";

export function Navigation() {
  return (
    <nav className={styles.navigationContainer}>
      <ul className={styles.listLinks}>
        <li className={styles.linkItem}>
          <a href="/#description" className={styles.link}>
            Sobre Mim
          </a>
        </li>
        <li className={styles.link}>
          <a href="/#projects">Projetos</a>
        </li>
        <li className={styles.link}>
          <a href="/#skills">Habilidades</a>
        </li>
        <li className={styles.link}>
          <a href="/#contact">Fale comigo</a>
        </li>
      </ul>
    </nav>
  );
}
