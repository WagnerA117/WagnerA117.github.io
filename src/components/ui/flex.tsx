import * as React from "react";

import { cn } from "@/lib/utils";

const Flex = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			"flex rounded-lg flex-row bg-card text-card-foreground ",
			className
		)}
		{...props}
	/>
));
Flex.displayName = "Flex";

export { Flex };
