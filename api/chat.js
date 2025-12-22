export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `
Kamu adalah chatbot portfolio Sanda.
Jawab santai dan hanya berdasarkan data berikut:

Nama: Sanda
Role: Web Developer
Tech: Laravel, CodeIgniter 3, JavaScript, React, Tailwind
Project: Catatku, YAFAHI, INFRATEK, YourTea
GitHub: https://github.com/Sanda28
            `,
          },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("OPENAI API ERROR:", data);
      return res.status(500).json({ error: "OpenAI API error" });
    }

    return res.status(200).json({
      reply: data.choices[0].message.content,
    });
  } catch (err) {
    console.error("SERVER ERROR:", err);
    return res.status(500).json({ error: "Server crash" });
  }
}
