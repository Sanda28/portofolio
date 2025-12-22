import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { message } = req.body;

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content: `
Kamu adalah chatbot portfolio Sanda.
Jawab santai, singkat, dan hanya berdasarkan data berikut:

Nama: Sanda
Role: Web Developer
Tech: Laravel, CodeIgniter 3, JavaScript, React, Tailwind
Project: Catatku, YAFAHI, INFRATEK, YourTea
GitHub: https://github.com/Sanda28
          `,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    const reply =
      response.output_text ||
      response.output?.[0]?.content?.[0]?.text ||
      "Maaf, aku belum bisa menjawab itu.";

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("OPENAI ERROR FULL:", error);

    return res.status(500).json({
      error: "Server error",
      detail: error.message,
    });
  }
}
