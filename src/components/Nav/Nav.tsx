import { FaHome, FaTools } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";

import styles from "./styles.module.css";

export function Navigation() {
  return (
    <nav className={styles.navigationContainer}>
      <div className={styles.containerList}>
        <ul className={styles.listLinks}>
          <li className={styles.link}>
            <a href="/#description">
              <FaHome size={30} color={"#0a8465"} />
              <span>Sobre</span>
            </a>
          </li>
          <li className={styles.link}>
            <a href="/#projects">
              <FaTools size={30} color={"#0a8465"} />
              <span>Projetos</span>
            </a>
          </li>
          <li className={styles.link}>
            <a href="/#skills">
              <GiSkills size={30} color={"#0a8465"} />
              <span>Habilidades</span>
            </a>
          </li>
          <li className={styles.link}>
            <a href="/#contact">
              <IoMdContact size={30} color={"#0a8465"} />
              <span>Contatos</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
