# claude-desktop-arch

Guía y extras para usar **Claude Desktop** en Arch Linux, más una skill para usar **ChatGPT como subagente**.

> No es un fork ni una copia de Claude Desktop. La app es propietaria de Anthropic y no se incluye aquí.

## 1. Instalar Claude Desktop

Paquete del AUR (mantenido por terceros, usa el `.deb` oficial de Anthropic):

```bash
yay -S claude-desktop
```

Revisa el PKGBUILD antes de instalar.

## 2. Instalar los extras de este repo

```bash
git clone https://github.com/pilahito/claude-desktop-arch
cd claude-desktop-arch && ./install.sh
```

Define tu clave sin ponerla nunca en el repo:

```bash
mkdir -p ~/.config/environment.d
echo 'OPENAI_API_KEY=sk-...' > ~/.config/environment.d/openai.conf
chmod 600 ~/.config/environment.d/openai.conf
```

Reinicia la sesión. Luego pide en Claude: *"pregúntale a ChatGPT…"*.

## 3. Gastar menos tokens

Esto no cambia la app, cambia cómo la usas:

- **Delegar** tareas simples a ChatGPT con la skill (resúmenes, traducciones, borradores).
- **Un `CLAUDE.md` corto** en cada proyecto: se carga en cada conversación.
- **Chats nuevos por tarea**: un historial largo se reenvía entero en cada mensaje.
- **Modelo más pequeño** para tareas fáciles (`/model`).
- **Pedir salidas concretas**: "solo el diff", "máximo 10 líneas".
- **Desactivar conectores/MCP que no uses**: cada herramienta añade tokens al contexto.

## Limitaciones
- Mejoras de rendimiento: solo flags de arranque de Electron, efecto pequeño.
- Los tokens de Claude no se reducen por arte de magia; la skill ahorra al mover trabajo a otro modelo, que tiene su propio coste en OpenAI.
- Lo que envías a ChatGPT sale a OpenAI. No mandes secretos.

## Licencia
MIT para el contenido de este repo.
