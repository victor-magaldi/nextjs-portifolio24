import React from "react";
import styles from "./styles.module.css";
import { FormContact } from "./FormContact";

export function SectionContact() {
  return (
    <section className={styles.sectionContact} id="contact">
      <div className="container">
        <h2 className={styles.contactTitle}>Contatos</h2>
        <p className={styles.contactMessage}>
          Proin scelerisque massa vel odio elementum, ac vestibulum nisl
          vehicula.
        </p>

        <FormContact />
      </div>
    </section>
  );
}
