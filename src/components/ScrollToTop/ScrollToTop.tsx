"use client";
import styles from "./styles.module.css";
import { FaArrowUp } from "react-icons/fa";

export function ScrollToTopButton() {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <button className={styles.returnToTop} onClick={scrollToTop}>
      <FaArrowUp size={40} color="#fff" />
    </button>
  );
}
