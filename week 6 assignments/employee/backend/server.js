import express from 'express';
import { connect } from 'mongoose';
import { employeeRoutes } from './APIs/employeeAPI.js';
import { config } from 'dotenv';
import cors from 'cors';

// Initialize environment variables processing
config();

const app = express();

// Apply Cross-Origin Resource Sharing
app.use(cors({
  origin: ['http://localhost:5173']
}));

// Setup JSON parsing middleware
app.use(express.json());

// Forward requests to employee router
app.use('/employee-api', employeeRoutes);

const APIPort = process.env.PORT || 3000;

// Database connection initialization
async function initializeDatabase() {
  try {
    await connect(process.env.DB_URL);
    console.log("Database connection established successfully!");

    // Start listening for requests
    app.listen(APIPort, () => {
      console.log(`Backend API actively running on port ${APIPort}...`);
    });
  } catch (error) {
    console.log("Database connection failed: ", error);
  }
}

// Execute connection
initializeDatabase();

// Global Error Handling Middleware
app.use((error, request, response, next) => {
  console.log("Error Encountered:", error.message);

  if (error.name === "ValidationError" || error.name === "CastError") {
    return response.status(400).json({ message: "Invalid data format provided", error: error.message });
  }

  // Handle generic server faults
  response.status(500).json({ message: "Internal server error", error: "server side error" });
});