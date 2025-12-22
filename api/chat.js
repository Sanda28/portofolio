import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const profileData = `
Nama: Sanda
Role: Web Developer
Tech Stack: React.js, Laravel, Tailwind CSS
Project:
- Catatku
- Portfolio React
GitHub: https://github.com/Sanda28
Tentang:
Saya web developer yang fokus React dan Laravel.
`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { message } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `Kamu adalah chatbot portfolio. Jawab hanya berdasarkan data berikut:\n${profileData}`,
        },
        { role: "user", content: message },
      ],
    });

    res.status(200).json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI error" });
  }
}
