#!/usr/bin/env node
// Envía un prompt a la API de OpenAI y imprime solo la respuesta.
// Uso: ask-chatgpt.mjs "pregunta"   |   echo "texto" | ask-chatgpt.mjs
// Variables: OPENAI_API_KEY (obligatoria), OPENAI_MODEL (opcional), OPENAI_MAX_TOKENS (opcional)
import { readFileSync } from "node:fs";

const key = process.env.OPENAI_API_KEY;
if (!key) {
  console.error("Falta OPENAI_API_KEY en el entorno.");
  process.exit(1);
}

let prompt = process.argv.slice(2).join(" ").trim();
if (!prompt && !process.stdin.isTTY) prompt = readFileSync(0, "utf8").trim();
if (!prompt) {
  console.error("Uso: ask-chatgpt.mjs \"pregunta\"");
  process.exit(1);
}

const res = await fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
  body: JSON.stringify({
    model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
    max_tokens: Number(process.env.OPENAI_MAX_TOKENS) || 1000,
    messages: [
      { role: "system", content: "Responde en español, directo y conciso. Sin relleno." },
      { role: "user", content: prompt },
    ],
  }),
});

const data = await res.json();
if (!res.ok) {
  console.error(`Error ${res.status}: ${data?.error?.message ?? "desconocido"}`);
  process.exit(1);
}
console.log(data.choices[0].message.content);
