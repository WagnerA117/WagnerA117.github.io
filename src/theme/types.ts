import {ReactNode} from "react";

export type ThemeType = "light" | "dark" | "system";

export type ThemeProviderPropTypes = {
	children: ReactNode;
	defaultTheme?: ThemeType;
	storageKey?: string;
};

export type ThemeProviderState = {
	theme: ThemeType;
	setTheme: (theme: ThemeType) => void;
};
