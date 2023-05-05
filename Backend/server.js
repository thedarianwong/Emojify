const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const prompts = require("./prompts");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function callChatGptApi(prompt) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 100,
      temperature: 0,
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error calling Chat GPT API:", error);
    throw error;
  }
}

app.post("/translate", async (req, res) => {
  const { inputText, translationType } = req.body;
  let prompt;

  if (translationType === "Translate to Emoji") {
    prompt = prompts.englishToEmojis + inputText;
    console.log(prompt);
  } else if (translationType === "Translate to English") {
    prompt = prompts.emojisToEnglish + inputText;
  } else {
    return res.status(400).json({ error: "Invalid translation type" });
  }

  try {
    const translation = await callChatGptApi(prompt);
    res.json({ translation });
  } catch (error) {
    res.status(500).json({ error: "Error calling Chat GPT API" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
