import styles from "./styles.module.css";

export function Navigation() {
  return (
    <nav className={styles.navigationContainer}>
      <div className={styles.containerList}>
        <ul className={styles.listLinks}>
          <li className={styles.linkItem}>
            <a href="/#description" className={styles.link}>
              ICONE
              <span>Sobre Mim</span>
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
      </div>
    </nav>
  );
}
