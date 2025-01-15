export function useHome() {
	const getBackendMessage = async (): Promise<string> => {
		const response = await fetch("http://localhost:8080/api/test-message");

		if (!response.ok) {
			throw new Error(`Error contacting backend: ${response.statusText}`);
		}

		return response.text(); // Parse the response as plain text
	};

	async function sendEmail(message: string) {
		console.log(message);

		const response = await fetch("http://localhost:8080/api/send-email", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ message }),
		});

		if (!response.ok) {
			const error = await response.json();

			throw new Error(error.message || "Unable to send email");
		}

		return response.json();
	}

	return {
		getBackendMessage,
		sendEmail,
	};
}
