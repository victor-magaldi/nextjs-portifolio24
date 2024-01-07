import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={`${styles.header}`}>
      <div className="container">
        <nav>
          <ul>
            <li>
              <a href="/#contact">Sobre Mim</a>
            </li>
            <li>
              <a href="/#contact">Habilidades</a>
            </li>
            <li>
              <a href="/#contact">Projetos</a>
            </li>
            <li>
              <a href="/#contact">Fale comigo</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
