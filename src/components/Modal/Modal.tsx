"use-client";

import ReactDOM from "react-dom";
import { Dispatch, MouseEvent, ReactNode, SetStateAction } from "react";

import styles from "./styles.module.css";

interface ModalInterface {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

export function Modal({ setModalOpen, children }: ModalInterface) {
  const handleCloseClsetModalOpenick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    setModalOpen(false);
  };

  const modalContent = (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <div className={styles.modal}>
          <div className={styles.headerModal}>
            <button onClick={handleCloseClsetModalOpenick}>x</button>
          </div>
          <div className={styles.headerModal}>{children}</div>
        </div>
      </div>
    </div>
  );

  if (typeof document !== "undefined") {
    const el = document?.getElementById("modal-root") as HTMLElement;

    return ReactDOM.createPortal(modalContent, el);
  }
}
