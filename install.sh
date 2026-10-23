#!/usr/bin/env bash
# Instala la skill y la config de arranque. No toca Claude Desktop.
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
mkdir -p ~/.claude/skills ~/.config
cp -r "$here/skills/chatgpt-subagent" ~/.claude/skills/
[[ -e ~/.config/claude-desktop-flags.conf ]] || cp "$here/config/claude-desktop-flags.conf" ~/.config/
echo "Listo. Añade OPENAI_API_KEY a tu entorno (por ejemplo en ~/.config/environment.d/openai.conf)."
