# Google AI Model Lister

A simple Node.js script to list available generative models provided by the Google AI Generative Language API (like the Gemini family). It uses the REST API to fetch and display details about each model.

## Features

*   Fetches the list of currently available generative models from Google AI.
*   Uses `dotenv` to securely manage your API key.
*   Displays key information for each model, including:
    *   Name (`models/model-name`)
    *   Display Name (e.g., "Gemini Pro")
    *   Description
    *   Supported Generation Methods (e.g., `generateContent`, `embedContent`)
    *   Input Token Limit
    *   Output Token Limit
*   Includes basic error handling for API key issues and network requests.

## Prerequisites

*   **Node.js and npm:** Ensure you have Node.js (which includes npm) installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
*   **Google AI API Key:** You need an API key from Google AI Studio (or Google Cloud Console, depending on your setup).
    *   You can get one easily from [Google AI Studio](https://aistudio.google.com/app/apikey).

## Setup

1.  **Clone the repository (or download the script):**
    ```bash
    git clone <your-repo-url>
    cd <your-repo-directory>
    ```
    Or simply download the `list_models.js` file.

2.  **Install Dependencies:**
    Open your terminal in the project directory and run:
    ```bash
    npm install dotenv node-fetch
    ```

3.  **Create Environment File:**
    Create a file named `.env` in the same directory as the script.

4.  **Add API Key to `.env` file:**
    Open the `.env` file and add your Google AI API Key like this:
    ```dotenv
    # .env
    GOOGLE_API_KEY=YOUR_API_KEY_HERE
    ```
    **Important:** Replace `YOUR_API_KEY_HERE` with your actual API key. Make sure *not* to commit your `.env` file to version control (add `.env` to your `.gitignore` file).

## Usage

Run the script from your terminal:

```bash
node list_models.js
```
