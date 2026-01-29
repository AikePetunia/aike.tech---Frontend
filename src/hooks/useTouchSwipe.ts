import { useRef, useState } from "react";

type Pane = {
  key: string;
  node: React.ReactNode;
};

export function useCarousel(panes: Pane[]) {
  const [idx, setIdx] = useState<number>(0);
  const touchStartX = useRef<number | null>(null);

  function handleButtons(direction: "left" | "right") {
    if (direction === "left") {
      setIdx((prev) => (prev - 1 + panes.length) % panes.length);
    } else {
      setIdx((prev) => (prev + 1) % panes.length);
    }
  }

  // first time touching screen
  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleButtons("left");
      } else {
        handleButtons("right");
      }
    }
  }
  return {
    idx,
    setIdx,
    handleButtons,
    handleTouchStart,
    handleTouchEnd,
  };
}
