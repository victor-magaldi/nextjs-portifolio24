"use client";

export function ScrollToTopButton() {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <button className="absolute bottom-0 p-10" onClick={scrollToTop}>
      para o alto
    </button>
  );
}
