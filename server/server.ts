import express, { Application, Request, Response } from "express";
import cors from "cors";

import dotenv from "dotenv";

dotenv.config({
	path: "../.env",
});

const app: Application = express();

const port = process.env.PORT;

const contactEmail = process.env.CONTACT_EMAIL;

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

//API Routes

app.get("/api/test-message", (req: Request, res: Response): void => {
	res.send("Backend contacted!");
});

app.post("/api/send-email", (req, res) => {
	console.log("Received message:", req.body);

	const message = req.body;

	res.status(200);

	res.json({
		message,
	});
});

// Start the server

console.log(contactEmail);

app.listen(port, () => {
	console.log(`Server is running!`);
});
