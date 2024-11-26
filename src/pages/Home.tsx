import { ModeToggle } from "@/components/mode-toggle";
import { Flex } from "@/components/ui";
import { H1 } from "@/components/typography";

export const Home = () => {
	return (
		<Flex>
			<Flex className="min-w-full min-h-screen p-2">
				<H1 className="place-content-center">Ahren Wagner</H1>
				<ModeToggle />
			</Flex>
		</Flex>
	);
};
