import {createContext, useContext, useEffect, useState} from "react";
import {ThemeProviderPropTypes, ThemeProviderState, ThemeType} from "./types";

const initialState: ThemeProviderState = {
	theme: "dark",
	setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export const ThemeProvider = ({
	children,
	defaultTheme = "dark",
	storageKey = "vite-ui-theme",
}: ThemeProviderPropTypes) => {
	const [theme, setTheme] = useState<ThemeType>(
		() => (localStorage.getItem(storageKey) as ThemeType) || defaultTheme
	);

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove("light", "dark");

		if (theme === "system") {
			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
				.matches
				? "dark"
				: "light";

			root.classList.add(systemTheme);
			return;
		}

		root.classList.add(theme);
	}, [theme]);

	const value = {
		theme,
		setTheme: (theme: ThemeType) => {
			localStorage.setItem(storageKey, theme);
			setTheme(theme);
		},
	};

	return (
		<ThemeProviderContext.Provider {...value} value={value}>
			{children}
		</ThemeProviderContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeProviderContext);

	if (context === undefined)
		throw new Error("useTheme must be used within a ThemeProvider");

	return context;
};
