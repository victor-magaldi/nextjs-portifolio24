"use-client";

import ReactDOM from "react-dom";
import { Dispatch, ReactNode, SetStateAction } from "react";

import styles from "./styles.module.css";

interface ModalInterface {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

export function Modal({ setModalOpen, children }: ModalInterface) {
  const handleClose = () => {
    setModalOpen(false);
  };

  const modalContent = (
    <div
      className={styles.modalOverlay}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleClose();
      }}
    >
      <div className={styles.modalContainer}>
        <div
          className={styles.modal}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={styles.headerModal}>
            <button
              className={styles.closeModal}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation;
                handleClose();
              }}
            >
              x
            </button>
          </div>
          <div className={styles.bodyModal}>{children}</div>
        </div>
      </div>
    </div>
  );

  if (typeof document !== "undefined") {
    const el = document?.getElementById("modal-root") as HTMLElement;

    return ReactDOM.createPortal(modalContent, el);
  }
}
