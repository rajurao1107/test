import express from "express";
import { VercelRequest, VercelResponse } from "@vercel/node";

const app = express();

// Define a route
app.get("/", (req, res) => {
    res.send("Hello World from Vercel 🚀");
});

// Export as a serverless function
export default (req, res) => {
    return app(req, res);
};
