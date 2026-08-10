import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
	threshold?: number;
	rootMargin?: string;
	once?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
	options: ScrollRevealOptions = {},
) {
	const {
		threshold = 0.15,
		rootMargin = "0px 0px -60px 0px",
		once = true,
	} = options;
	const ref = useRef<T>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		// If already in the viewport on mount, reveal immediately
		const rect = el.getBoundingClientRect();
		if (rect.top < window.innerHeight && rect.bottom > 0) {
			setIsVisible(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					if (once) observer.unobserve(el);
				} else if (!once) {
					setIsVisible(false);
				}
			},
			{ threshold, rootMargin },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [threshold, rootMargin, once]);

	return { ref, isVisible };
}
