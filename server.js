/* eslint-disable no-undef */
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const API_URL = "https://integrate.api.nvidia.com/v1";
const API_KEY = process.env.NVIDIA_API_KEY;

app.post("/ask-ai", async (req, res) => {
  try {
    const { question } = req.body;

    const response = await axios.post(
      `${API_URL}/chat/completions`,
      {
        model: "meta/llama-3.1-405b-instruct",
        messages: [{ role: "user", content: question }],
        temperature: 0.2,
        top_p: 0.7,
        max_tokens: 1024,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({ message: response.data.choices[0]?.message?.content || "No response from AI." });
  } catch (error) {
    console.error("Error calling AI API:", error);
    res.status(500).json({ message: "Error processing AI request" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
