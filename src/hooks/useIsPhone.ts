import { useEffect, useState } from "react";

export function useIsPhone(maxWidth: number) {
  const [isPhone, setIsPhone] = useState(window.innerWidth <= maxWidth);

  useEffect(() => {
    const update = () => setIsPhone(window.innerWidth <= maxWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [maxWidth]);

  return isPhone;
}
