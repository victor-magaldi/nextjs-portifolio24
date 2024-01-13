import styles from "./styles.module.css";

export function Navigation() {
  return (
    <nav className={styles.navigationContainer}>
      <div className={styles.containerList}>
        <ul className={styles.listLinks}>
          <li className={styles.linkItem}>
            <a href="/#description" className={styles.link}>
              @<span>Sobre Mim</span>
            </a>
          </li>
          <li className={styles.link}>
            <a href="/#projects">
              @<span>Projetos</span>
            </a>
          </li>
          <li className={styles.link}>
            <a href="/#skills">
              @<span>Habilidades</span>
            </a>
          </li>
          <li className={styles.link}>
            <a href="/#contact">
              {" "}
              @<span>Contatos</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
