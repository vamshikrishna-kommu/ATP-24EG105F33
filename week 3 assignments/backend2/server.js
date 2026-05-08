import express from "express";
import { connect } from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { userApp } from "./APIs/userAPI.js";
import { productApp } from "./APIs/productAPI.js";

// Initialize environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const dbUrl = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/backendDB";

// Middleware
app.use(express.json());
app.use(cookieParser());

// Custom Logger Middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// JSON parse error handler
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ message: "Invalid JSON format" });
    }
    next();
});

// APIs
app.use("/user-api", userApp);
app.use("/product-api", productApp);

// Database Connection & Server Start
async function startApp() {
    try {
        await connect(dbUrl);
        console.log("Connected to MongoDB successfully");

        app.listen(port, () => {
            console.log(`Backend server is running on http://localhost:${port}`);
        });
    } catch (err) {
        console.error("Database connection failed:", err.message);
        process.exit(1);
    }
}

startApp();

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);

    if (err.name === 'ValidationError') {
        return res.status(400).json({ message: "Validation Error", error: err.message });
    }

    if (err.name === 'CastError') {
        return res.status(400).json({ message: "Invalid Resource ID", error: err.message });
    }

    res.status(500).json({ message: "Internal Server Error", error: err.message });
});