import { ModeToggle } from "@/components/mode-toggle";
import { Button, Flex } from "@/components/ui";
import { H1 } from "@/components/typography";
import { useHome } from "./useHome";

export const Home = () => {
	const { getBackendMessage, sendEmail } = useHome();

	function handleClick() {
		sendEmail("Test Message checking");
	}

	function handleGetBackendMessage() {
		getBackendMessage();
	}

	return (
		<Flex>
			<Flex className="min-w-full min-h-screen p-2 ">
				<H1 className="place-content-center">Ahren Wagner</H1>
				<ModeToggle />
				<Button onClick={handleGetBackendMessage}>Get Backend Message</Button>
				<Button onClick={handleClick}>Get in Contact</Button>
			</Flex>
		</Flex>
	);
};
