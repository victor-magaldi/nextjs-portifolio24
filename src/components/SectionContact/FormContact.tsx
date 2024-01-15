import React from "react";
import styles from "./styles.module.css";

export function FormContact() {
  return (
    <form className={styles.formContact} method="POST" action="/#">
      <input
        className={styles.inputText}
        type="text"
        name="email"
        placeholder="E-mail"
      />
      <input
        className={styles.inputText}
        type="text"
        name="name"
        placeholder="Nome"
      />
      <textarea
        className={styles.inputTextArea}
        name="message"
        placeholder="Mensagem"
        draggable={false}
        maxLength={300}
      />
      <input className={styles.btnSubmit} type="submit" placeholder="Enviar" />
    </form>
  );
}
