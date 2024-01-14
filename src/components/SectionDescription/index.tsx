import React from "react";
import styles from "./styles.module.css";

export function SectionDescription() {
  return (
    <section className={styles.sectionDescriptionMe} id="description">
      <div className="container">
        <h2>Sobre mim</h2>
        <p>
          Proin scelerisque massa vel odio elementum, ac vestibulum nisl
          vehicula. Vestibulum eleifend mollis nulla, vel semper nisl. Curabitur
          vitae neque pretium, facilisis velit in, semper leo
        </p>
        <div className={styles.textMeContainer}>
          <img
            src="https://github.com/victor-magaldi.png"
            alt="victor-magaldi-avatar-image"
            width={500}
            height={500}
            className={styles.imageProfile}
          />
          <div className={styles.textMe}>
            <h3>Desenvolvedor Fullstack e Arquiteto de Soluções</h3>
            <p>
              Proin scelerisque massa vel odio elementum, ac vestibulum nisl
              vehicula. Vestibulum eleifend mollis nulla, vel semper nisl.
              Curabitur vitae neque pretium, facilisis velit in, semper leo.
            </p>
            <ul>
              <li>Nascimento: 17/03/1994</li>
              <li>Idade: 29</li>
              <li>Cidade: Nova Friburgo, RJ, Brasil</li>
              <li>E-mail: victmagaldi@hotmail.com</li>
              <li>Nível: Especialista</li>
              <li>Freelancer: disponível</li>
            </ul>
            <p>
              Proin scelerisque massa vel odio elementum, ac vestibulum nisl
              vehicula. Vestibulum eleifend mollis nulla, vel semper nisl.
              Curabitur vitae neque pretium, facilisis velit in, semper leo.
            </p>
          </div>
        </div>
        <h2>Experiências</h2>
        <div className={styles.contaienrExp}>
          <div className={styles.itemExp}>
            <h3>AGÊNCIA M3 - (2020) - Estagiário Front-end - Vtex</h3>
            <p>
              Proin scelerisque massa vel odio elementum, ac vestibulum nisl
              vehicula. Vestibulum eleifend mollis nulla, vel semper nisl.
              Curabitur vitae neque pretium, facilisis velit in, semper leo.
            </p>
            <p>
              Proin scelerisque massa vel odio elementum, ac vestibulum nisl
              vehicula. Vestibulum eleifend mollis nulla, vel semper nisl.
              Curabitur vitae neque pretium, facilisis velit in, semper leo.
            </p>
            <ul>
              <li>
                <p>
                  <strong>Projeto X</strong>
                </p>
                <p>
                  Proin scelerisque massa vel odio elementum, ac vestibulum nisl
                  vehicula. Vestibulum eleifend mollis nulla, vel semper nisl.
                  Curabitur vitae neque pretium, facilisis velit in, semper leo.
                </p>
              </li>
              <li>
                <p>
                  <strong>Projeto X</strong>
                </p>
                <p>
                  Proin scelerisque massa vel odio elementum, ac vestibulum nisl
                  vehicula. Vestibulum eleifend mollis nulla, vel semper nisl.
                  Curabitur vitae neque pretium, facilisis velit in, semper leo.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.itemExp}>
            <h3>AGÊNCIA M3 - (2020) - Desenvolvedor Front-end - Vtex</h3>
            <p>
              Proin scelerisque massa vel odio elementum, ac vestibulum nisl
              vehicula. Vestibulum eleifend mollis nulla, vel semper nisl.
              Curabitur vitae neque pretium, facilisis velit in, semper leo.
            </p>
          </div>
          <div className={styles.itemExp}>
            <h3>
              AVANTI DESENVOLVIMENTO DE SISTEMAS LTDA.- (2021) - Desenvolvedor
              Fullstack - Vtex
            </h3>
            <p>
              Proin scelerisque massa vel odio elementum, ac vestibulum nisl
              vehicula. Vestibulum eleifend mollis nulla, vel semper nisl.
              Curabitur vitae neque pretium, facilisis velit in, semper leo.
            </p>
          </div>
          <div className={styles.itemExp}>
            <h3>
              AVANTI DESENVOLVIMENTO DE SISTEMAS LTDA.- (2022) - Techlead - Vtex
            </h3>
            <p>
              Proin scelerisque massa vel odio elementum, ac vestibulum nisl
              vehicula. Vestibulum eleifend mollis nulla, vel semper nisl.
              Curabitur vitae neque pretium, facilisis velit in, semper leo.
            </p>
          </div>
          <div className={styles.itemExp}>
            <h3>
              ACCT by Quality - (2022 e atualmente). - Arquitetos de Soluções -
              Vtex
            </h3>
            <p>
              Proin scelerisque massa vel odio elementum, ac vestibulum nisl
              vehicula. Vestibulum eleifend mollis nulla, vel semper nisl.
              Curabitur vitae neque pretium, facilisis velit in, semper leo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
