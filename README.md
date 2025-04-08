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
    git clone https://github.com/peterbabulik/GoogleApliListModels
    cd GoogleApliListModels
    ```
    Or simply download the `list.js` file.

2.  **Install Dependencies:**
    Open your terminal in the project directory and run:
    ```bash
    npm install dotenv node-fetch
    ```

3.  **Edit Environment File:**
    Edit a file named `.env` in the same directory as the script.

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
node list.js
```
## Output example (4/8/2025)

```
node list
Fetching available models...

Available Models:
-----------------
Name: models/chat-bison-001
Display Name: PaLM 2 Chat (Legacy)
Description: A legacy text-only model optimized for chat conversations
Supported Generation Methods: generateMessage, countMessageTokens
Input Token Limit: 4096
Output Token Limit: 1024
-----------------
Name: models/text-bison-001
Display Name: PaLM 2 (Legacy)
Description: A legacy model that understands text and generates text as an output
Supported Generation Methods: generateText, countTextTokens, createTunedTextModel
Input Token Limit: 8196
Output Token Limit: 1024
-----------------
Name: models/embedding-gecko-001
Display Name: Embedding Gecko
Description: Obtain a distributed representation of a text.
Supported Generation Methods: embedText, countTextTokens
Input Token Limit: 1024
Output Token Limit: 1
-----------------
Name: models/gemini-1.0-pro-vision-latest
Display Name: Gemini 1.0 Pro Vision
Description: The original Gemini 1.0 Pro Vision model version which was optimized for image understanding. Gemini 1.0 Pro Vision was deprecated on July 12, 2024. Move to a newer Gemini version.
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 12288
Output Token Limit: 4096
-----------------
Name: models/gemini-pro-vision
Display Name: Gemini 1.0 Pro Vision
Description: The original Gemini 1.0 Pro Vision model version which was optimized for image understanding. Gemini 1.0 Pro Vision was deprecated on July 12, 2024. Move to a newer Gemini version.
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 12288
Output Token Limit: 4096
-----------------
Name: models/gemini-1.5-pro-latest
Display Name: Gemini 1.5 Pro Latest
Description: Alias that points to the most recent production (non-experimental) release of Gemini 1.5 Pro, our mid-size multimodal model that supports up to 2 million tokens.
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 2000000
Output Token Limit: 8192
-----------------
Name: models/gemini-1.5-pro-001
Display Name: Gemini 1.5 Pro 001
Description: Stable version of Gemini 1.5 Pro, our mid-size multimodal model that supports up to 2 million tokens, released in May of 2024.
Supported Generation Methods: generateContent, countTokens, createCachedContent
Input Token Limit: 2000000
Output Token Limit: 8192
-----------------
Name: models/gemini-1.5-pro-002
Display Name: Gemini 1.5 Pro 002
Description: Stable version of Gemini 1.5 Pro, our mid-size multimodal model that supports up to 2 million tokens, released in September of 2024.
Supported Generation Methods: generateContent, countTokens, createCachedContent
Input Token Limit: 2000000
Output Token Limit: 8192
-----------------
Name: models/gemini-1.5-pro
Display Name: Gemini 1.5 Pro
Description: Stable version of Gemini 1.5 Pro, our mid-size multimodal model that supports up to 2 million tokens, released in May of 2024.
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 2000000
Output Token Limit: 8192
-----------------
Name: models/gemini-1.5-flash-latest
Display Name: Gemini 1.5 Flash Latest
Description: Alias that points to the most recent production (non-experimental) release of Gemini 1.5 Flash, our fast and versatile multimodal model for scaling across diverse tasks.
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 1000000
Output Token Limit: 8192
-----------------
Name: models/gemini-1.5-flash-001
Display Name: Gemini 1.5 Flash 001
Description: Stable version of Gemini 1.5 Flash, our fast and versatile multimodal model for scaling across diverse tasks, released in May of 2024.
Supported Generation Methods: generateContent, countTokens, createCachedContent
Input Token Limit: 1000000
Output Token Limit: 8192
-----------------
Name: models/gemini-1.5-flash-001-tuning
Display Name: Gemini 1.5 Flash 001 Tuning
Description: Version of Gemini 1.5 Flash that supports tuning, our fast and versatile multimodal model for scaling across diverse tasks, released in May of 2024.
Supported Generation Methods: generateContent, countTokens, createTunedModel
Input Token Limit: 16384
Output Token Limit: 8192
-----------------
Name: models/gemini-1.5-flash
Display Name: Gemini 1.5 Flash
Description: Alias that points to the most recent stable version of Gemini 1.5 Flash, our fast and versatile multimodal model for scaling across diverse tasks.
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 1000000
Output Token Limit: 8192
-----------------
Name: models/gemini-1.5-flash-002
Display Name: Gemini 1.5 Flash 002
Description: Stable version of Gemini 1.5 Flash, our fast and versatile multimodal model for scaling across diverse tasks, released in September of 2024.
Supported Generation Methods: generateContent, countTokens, createCachedContent
Input Token Limit: 1000000
Output Token Limit: 8192
-----------------
Name: models/gemini-1.5-flash-8b
Display Name: Gemini 1.5 Flash-8B
Description: Stable version of Gemini 1.5 Flash-8B, our smallest and most cost effective Flash model, released in October of 2024.
Supported Generation Methods: createCachedContent, generateContent, countTokens
Input Token Limit: 1000000
Output Token Limit: 8192
-----------------
Name: models/gemini-1.5-flash-8b-001
Display Name: Gemini 1.5 Flash-8B 001
Description: Stable version of Gemini 1.5 Flash-8B, our smallest and most cost effective Flash model, released in October of 2024.
Supported Generation Methods: createCachedContent, generateContent, countTokens
Input Token Limit: 1000000
Output Token Limit: 8192
-----------------
Name: models/gemini-1.5-flash-8b-latest
Display Name: Gemini 1.5 Flash-8B Latest
Description: Alias that points to the most recent production (non-experimental) release of Gemini 1.5 Flash-8B, our smallest and most cost effective Flash model, released in October of 2024.
Supported Generation Methods: createCachedContent, generateContent, countTokens
Input Token Limit: 1000000
Output Token Limit: 8192
-----------------
Name: models/gemini-1.5-flash-8b-exp-0827
Display Name: Gemini 1.5 Flash 8B Experimental 0827
Description: Experimental release (August 27th, 2024) of Gemini 1.5 Flash-8B, our smallest and most cost effective Flash model. Replaced by Gemini-1.5-flash-8b-001 (stable).
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 1000000
Output Token Limit: 8192
-----------------
Name: models/gemini-1.5-flash-8b-exp-0924
Display Name: Gemini 1.5 Flash 8B Experimental 0924
Description: Experimental release (September 24th, 2024) of Gemini 1.5 Flash-8B, our smallest and most cost effective Flash model. Replaced by Gemini-1.5-flash-8b-001 (stable).
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 1000000
Output Token Limit: 8192
-----------------
Name: models/gemini-2.5-pro-exp-03-25
Display Name: Gemini 2.5 Pro Experimental 03-25
Description: Experimental release (March 25th, 2025) of Gemini 2.5 Pro
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 1048576
Output Token Limit: 65536
-----------------
Name: models/gemini-2.5-pro-preview-03-25
Display Name: Gemini 2.5 Pro Preview 03-25
Description: Gemini 2.5 Pro Preview 03-25
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 1048576
Output Token Limit: 65536
-----------------
Name: models/gemini-2.0-flash-exp
Display Name: Gemini 2.0 Flash Experimental
Description: Gemini 2.0 Flash Experimental
Supported Generation Methods: generateContent, countTokens, bidiGenerateContent
Input Token Limit: 1048576
Output Token Limit: 8192
-----------------
Name: models/gemini-2.0-flash
Display Name: Gemini 2.0 Flash
Description: Gemini 2.0 Flash
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 1048576
Output Token Limit: 8192
-----------------
Name: models/gemini-2.0-flash-001
Display Name: Gemini 2.0 Flash 001
Description: Stable version of Gemini 2.0 Flash, our fast and versatile multimodal model for scaling across diverse tasks, released in January of 2025.
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 1048576
Output Token Limit: 8192
-----------------
Name: models/gemini-2.0-flash-exp-image-generation
Display Name: Gemini 2.0 Flash (Image Generation) Experimental
Description: Gemini 2.0 Flash (Image Generation) Experimental
Supported Generation Methods: generateContent, countTokens, bidiGenerateContent
Input Token Limit: 1048576
Output Token Limit: 8192
-----------------
Name: models/gemini-2.0-flash-lite-001
Display Name: Gemini 2.0 Flash-Lite 001
Description: Stable version of Gemini 2.0 Flash Lite
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 1048576
Output Token Limit: 8192
-----------------
Name: models/gemini-2.0-flash-lite
Display Name: Gemini 2.0 Flash-Lite
Description: Gemini 2.0 Flash-Lite
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 1048576
Output Token Limit: 8192
-----------------
Name: models/gemini-2.0-flash-lite-preview-02-05
Display Name: Gemini 2.0 Flash-Lite Preview 02-05
Description: Preview release (February 5th, 2025) of Gemini 2.0 Flash Lite
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 1048576
Output Token Limit: 8192
-----------------
Name: models/gemini-2.0-flash-lite-preview
Display Name: Gemini 2.0 Flash-Lite Preview
Description: Preview release (February 5th, 2025) of Gemini 2.0 Flash Lite
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 1048576
Output Token Limit: 8192
-----------------
Name: models/gemini-2.0-pro-exp
Display Name: Gemini 2.0 Pro Experimental
Description: Experimental release (March 25th, 2025) of Gemini 2.5 Pro
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 1048576
Output Token Limit: 65536
-----------------
Name: models/gemini-2.0-pro-exp-02-05
Display Name: Gemini 2.0 Pro Experimental 02-05
Description: Experimental release (March 25th, 2025) of Gemini 2.5 Pro
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 1048576
Output Token Limit: 65536
-----------------
Name: models/gemini-exp-1206
Display Name: Gemini Experimental 1206
Description: Experimental release (March 25th, 2025) of Gemini 2.5 Pro
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 1048576
Output Token Limit: 65536
-----------------
Name: models/gemini-2.0-flash-thinking-exp-01-21
Display Name: Gemini 2.0 Flash Thinking Experimental 01-21
Description: Experimental release (January 21st, 2025) of Gemini 2.0 Flash Thinking
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 1048576
Output Token Limit: 65536
-----------------
Name: models/gemini-2.0-flash-thinking-exp
Display Name: Gemini 2.0 Flash Thinking Experimental 01-21
Description: Experimental release (January 21st, 2025) of Gemini 2.0 Flash Thinking
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 1048576
Output Token Limit: 65536
-----------------
Name: models/gemini-2.0-flash-thinking-exp-1219
Display Name: Gemini 2.0 Flash Thinking Experimental
Description: Gemini 2.0 Flash Thinking Experimental
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 1048576
Output Token Limit: 65536
-----------------
Name: models/learnlm-1.5-pro-experimental
Display Name: LearnLM 1.5 Pro Experimental
Description: Alias that points to the most recent stable version of Gemini 1.5 Pro, our mid-size multimodal model that supports up to 2 million tokens.
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 32767
Output Token Limit: 8192
-----------------
Name: models/gemma-3-1b-it
Display Name: Gemma 3 1B
Description: undefined
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 32768
Output Token Limit: 8192
-----------------
Name: models/gemma-3-4b-it
Display Name: Gemma 3 4B
Description: undefined
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 32768
Output Token Limit: 8192
-----------------
Name: models/gemma-3-12b-it
Display Name: Gemma 3 12B
Description: undefined
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 32768
Output Token Limit: 8192
-----------------
Name: models/gemma-3-27b-it
Display Name: Gemma 3 27B
Description: undefined
Supported Generation Methods: generateContent, countTokens
Input Token Limit: 131072
Output Token Limit: 8192
-----------------
Name: models/embedding-001
Display Name: Embedding 001
Description: Obtain a distributed representation of a text.
Supported Generation Methods: embedContent
Input Token Limit: 2048
Output Token Limit: 1
-----------------
Name: models/text-embedding-004
Display Name: Text Embedding 004
Description: Obtain a distributed representation of a text.
Supported Generation Methods: embedContent
Input Token Limit: 2048
Output Token Limit: 1
-----------------
Name: models/gemini-embedding-exp-03-07
Display Name: Gemini Embedding Experimental 03-07
Description: Obtain a distributed representation of a text.
Supported Generation Methods: embedContent
Input Token Limit: 8192
Output Token Limit: 1
-----------------
Name: models/gemini-embedding-exp
Display Name: Gemini Embedding Experimental
Description: Obtain a distributed representation of a text.
Supported Generation Methods: embedContent
Input Token Limit: 8192
Output Token Limit: 1
-----------------
Name: models/aqa
Display Name: Model that performs Attributed Question Answering.
Description: Model trained to return answers to questions that are grounded in provided sources, along with estimating answerable probability.
Supported Generation Methods: generateAnswer
Input Token Limit: 7168
Output Token Limit: 1024
-----------------
Name: models/imagen-3.0-generate-002
Display Name: Imagen 3.0 002 model
Description: Vertex served Imagen 3.0 002 model
Supported Generation Methods: predict
Input Token Limit: 480
Output Token Limit: 8192
-----------------
```
