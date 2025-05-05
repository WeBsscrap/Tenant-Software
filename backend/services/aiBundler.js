const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Simulates AI-powered bundle suggestions based on product list and category preferences
async function generateProductBundle(products, projectDetails) {
    const prompt = `
You are a helpful assistant in a construction materials sales system. Based on the following project details and product list, recommend a bundle of 3-5 items that best go together. Include a short explanation for each item. Keep suggestions realistic.

Project Details: ${JSON.stringify(projectDetails)}
Available Products: ${products.map(p => `${p.name} (${p.category}) - $${p.price}`).join(", ")}

Respond with a JSON array like:
[
  { "name": "...", "reason": "...", "price": ... }
]
`;

    const response = await openai.createChatCompletion({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
    });

    try {
        const content = response.data.choices[0].message.content.trim();
        return JSON.parse(content);
    } catch (err) {
        console.error("Error parsing AI response:", err);
        return [];
    }
}

module.exports = { generateProductBundle };
