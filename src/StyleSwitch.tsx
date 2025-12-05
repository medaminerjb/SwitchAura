import { useEffect } from "react";

export const StyleSwitch = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.id = "react-theme-animation-styles";
    style.innerHTML = `
      body {
        transition: background-color 0.3s ease, color 0.3s ease;
      }
      @keyframes reveal-in {
        from { clip-path: circle(0% at var(--x) var(--y)); }
        to { clip-path: circle(150% at var(--x) var(--y)); }
      }
      ::view-transition-new(root) {
        animation: reveal-in 0.6s ease-in-out forwards;
        z-index: 2;
      }
      ::view-transition-old(root) {
        animation: none;
        z-index: 1;
      }
      ::view-transition-image-pair(root) {
        isolation: isolate;
      }
    `;
    document.head.appendChild(style);

    return () => {
      const existing = document.getElementById("react-theme-animation-styles");
      if (existing) existing.remove();
    };
  }, []);

  return null;
};
