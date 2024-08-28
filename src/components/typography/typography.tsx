import { PropsWithChildren } from "react";

export function H1({ children }: PropsWithChildren) {
	return (
		<h1 className="text-4xl font-extrabold tracking-tight text-center align-bottom  scroll-m-20 lg:text-5xl">
			{children}
		</h1>
	);
}
