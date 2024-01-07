import styles from "./styles.module.css";

export function Cta() {
  return (
    <div>
      <a className={styles.myButton} title={"Fale Comigo"} href={"/#contact"}>
        Fale Comigo
      </a>
    </div>
  );
}
