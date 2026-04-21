import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Mode = "day" | "night";

interface ModeContextValue {
	mode: Mode;
	toggleMode: () => void;
	setMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeContextValue | undefined>(undefined);

const STORAGE_KEY = "entre2-mode";

const getDefaultMode = (): Mode => {
	if (typeof window === "undefined") return "day";
	const stored = sessionStorage.getItem(STORAGE_KEY) as Mode | null;
	if (stored === "day" || stored === "night") return stored;
	const hour = new Date().getHours();
	return hour >= 18 || hour < 6 ? "night" : "day";
};

export const ModeProvider = ({ children }: { children: ReactNode }) => {
	const [mode, setModeState] = useState<Mode>(getDefaultMode);

	useEffect(() => {
		const root = document.documentElement;
		if (mode === "night") {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
		sessionStorage.setItem(STORAGE_KEY, mode);
	}, [mode]);

	const toggleMode = useCallback(() => {
		setModeState((prev) => (prev === "day" ? "night" : "day"));
	}, []);

	const setMode = useCallback((next: Mode) => {
		setModeState(next);
	}, []);

	const value = useMemo(() => ({ mode, toggleMode, setMode }), [mode, toggleMode, setMode]);

	return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
};

export const useMode = () => {
	const ctx = useContext(ModeContext);
	if (!ctx) throw new Error("useMode must be used within ModeProvider");
	return ctx;
};
