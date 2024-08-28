import { ModeToggle } from "@/components/mode-toggle";
import { Card, Flex } from "@/components/ui";
import { H1 } from "@/components/typography";

export const Home = () => {
	return (
		<Flex className="flex-row flex-wrap min-h-screen p-2">
			<Card className="flex items-center justify-between w-full pl-2 max-h-24">
				<H1>Ahren Wagner</H1>
				<Flex className="items-start h-full p-1">
					<ModeToggle />
				</Flex>
			</Card>
			<Flex className="items-start pl-2 "></Flex>
		</Flex>
	);
};
