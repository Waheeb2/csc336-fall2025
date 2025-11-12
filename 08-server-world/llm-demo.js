import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: "AIzaSyDOOdjMfWr5dHiqIv1488HPswuzy7id_nM"
});

async function generateText(prompt) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
    });

    return response.text;
}

let prompt = "Give me a list of 10 interesting things";
let llmText = await generateText (prompt);
console.log(llmText);

