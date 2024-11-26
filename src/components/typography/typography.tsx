import { cn } from "@/lib/utils";

interface H1Props extends React.HTMLAttributes<HTMLHeadElement> {
	children: React.ReactNode;
}

export function H1({ children, className }: H1Props) {
	return (
		<h1
			className={cn(
				"text-4xl font-extrabold tracking-tight text-center align-bottom scroll-m-20 lg:text-5xl",
				className
			)}
		>
			{children}
		</h1>
	);
}
