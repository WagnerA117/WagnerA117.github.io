import { ModeToggle } from "@/components/mode-toggle";
import { Card } from "ui/card";

export const Home = () => {
	return (
		<>
			<ModeToggle />
			<Card></Card>

			<div className=" dark:text-slate-100 text-slate-900">This is a test</div>
		</>
	);
};
