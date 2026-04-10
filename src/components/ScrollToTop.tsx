import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useLayoutEffect(() => {
    const params = new URLSearchParams(search);
    const section = params.get("section");
    let frame = 0;

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    if (section) {
      frame = window.requestAnimationFrame(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: "auto", block: "start" });
        }
      });

      return () => window.cancelAnimationFrame(frame);
    }

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;
