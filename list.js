// list.js
require('dotenv').config(); // Load environment variables from .env file
const fetch = require('node-fetch'); // Use node-fetch to make HTTP requests

const apiKey = process.env.GOOGLE_API_KEY;

if (!apiKey) {
  console.error("Error: GOOGLE_API_KEY not found in .env file.");
  process.exit(1); // Exit if the key is missing
}

// The REST API endpoint for listing models
// Using v1beta as it's commonly used for Gemini features
const listModelsUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

async function listAvailableModels() {
  console.log("Fetching available models...");
  try {
    const response = await fetch(listModelsUrl);

    if (!response.ok) {
      // If response status is not 2xx, throw an error
      const errorBody = await response.text(); // Try to get more error details
      throw new Error(`API request failed with status ${response.status}: ${response.statusText}. Body: ${errorBody}`);
    }

    const data = await response.json(); // Parse the JSON response

    if (data.models && data.models.length > 0) {
      console.log("\nAvailable Models:");
      console.log("-----------------");
      data.models.forEach(model => {
        console.log(`Name: ${model.name}`);
        console.log(`Display Name: ${model.displayName}`);
        console.log(`Description: ${model.description}`);
        // Log other potentially useful fields
        console.log(`Supported Generation Methods: ${model.supportedGenerationMethods.join(', ')}`);
        console.log(`Input Token Limit: ${model.inputTokenLimit}`);
        console.log(`Output Token Limit: ${model.outputTokenLimit}`);
        console.log("-----------------");
      });
    } else {
      console.log("No models found or the response format was unexpected.");
      console.log("Raw response:", data);
    }

  } catch (error) {
    console.error("\nError fetching models:");
    console.error(error.message); // Print a cleaner error message
    // You might want to log the full error for debugging: console.error(error);
  }
}

listAvailableModels();
