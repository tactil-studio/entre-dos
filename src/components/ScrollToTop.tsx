import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
	const { pathname, search } = useLocation();

	useLayoutEffect(() => {
		const params = new URLSearchParams(search);
		const section = params.get("section");

		window.scrollTo({ top: 0, left: 0, behavior: "auto" });

		if (section) {
			// Double rAF + timeout so React finishes painting the new route before scrolling
			let timer: ReturnType<typeof setTimeout>;
			const frame = window.requestAnimationFrame(() => {
				window.requestAnimationFrame(() => {
					timer = setTimeout(() => {
						const el = document.getElementById(section);
						if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
					}, 120);
				});
			});
			return () => {
				window.cancelAnimationFrame(frame);
				clearTimeout(timer);
			};
		}
	}, [pathname, search]);

	return null;
};

export default ScrollToTop;
