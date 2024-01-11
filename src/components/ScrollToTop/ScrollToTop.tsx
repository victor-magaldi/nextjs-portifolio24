"use client";
import styles from "./styles.module.css";

export function ScrollToTopButton() {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <button className={styles.returnToTop} onClick={scrollToTop}>
      para o alto
    </button>
  );
}
