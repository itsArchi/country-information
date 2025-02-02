import axios from "axios";

export const askAI = async (question) => {
  try {
    const response = await axios.post("http://localhost:5000/ask-ai", { question });
    return response.data?.message || "No response from AI.";
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Sorry, I couldn't process your request.";
  }
};
