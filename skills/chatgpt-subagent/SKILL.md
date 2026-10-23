---
name: chatgpt-subagent
description: Delega a ChatGPT (API de OpenAI) tareas simples y de bajo riesgo para ahorrar tokens de Claude, como resúmenes, reformateo, traducciones, borradores o segunda opinión. Úsala cuando el usuario pida "pregúntale a ChatGPT" o una segunda opinión.
---

# ChatGPT como subagente

Ejecuta el script con el prompt y usa solo su salida:

```bash
node ~/.claude/skills/chatgpt-subagent/ask-chatgpt.mjs "tu prompt"
```

## Cuándo usarla
- Resumir o reformatear texto largo.
- Traducciones y borradores.
- Segunda opinión sobre una respuesta.

## Cuándo NO usarla
- Código con secretos, credenciales o datos privados: el texto se envía a OpenAI.
- Decisiones que requieran acceso a los archivos del proyecto.

## Reglas
- Envía solo el texto necesario, nunca el contexto completo.
- Trata la respuesta como una sugerencia y verifícala antes de aplicarla.
- Si falta `OPENAI_API_KEY`, díselo al usuario. No la pidas por el chat.
- Modelo y límite se cambian con `OPENAI_MODEL` y `OPENAI_MAX_TOKENS`.
