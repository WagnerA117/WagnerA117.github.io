import express from "express";

const app = express();

app.get("/api", (req, res) => {
	res.json({ test: ["testing"] });
});

app.listen(8080, () => {
	console.log("Server started on 8080");
});
