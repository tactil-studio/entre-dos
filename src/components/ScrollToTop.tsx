import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const section = params.get("section");

    if (section) {
      // Wait for page to render then scroll to section
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
      return;
    }

    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;
