import { useEffect, useState } from "react";

export const useViewportWidth = (): number => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const onResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return windowWidth;
};
