import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
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
        { role: "user", content: message },
      ],
    });

    return res.status(200).json({
      reply: completion.choices[0].message.content,
    });
  } catch (err) {
    console.error("OPENAI ERROR:", err);
    return res.status(500).json({
      error: "AI error",
      detail: err.message,
    });
  }
}
