"use client";

import { useEffect, useState } from "react";
import styles from "./custom-cursor.module.css";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const target = event.target as HTMLElement;

      setIsInteractive(
        Boolean(
          target.closest(
            "a, button, [role='button'], input, textarea, select"
          )
        )
      );
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <div
      className={`${styles.cursor} ${
        isInteractive ? styles["cursor--interactive"] : ""
      }`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      ♡
    </div>
  );
}