"use client";

import { useState } from "react";
import { Modal } from "../Modal/Modal";
import styles from "./styles.module.css";

export function ProjectCard({ id }: any) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

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
      <button
        className=""
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Ver mais
      </button>

      {modalOpen ? (
        <Modal setModalOpen={setModalOpen}>
          <h1>modal N {id}</h1>
        </Modal>
      ) : null}
    </div>
  );
}
