# Setup GitHub — mcd-dashboard

Instrucciones para crear el repositorio en GitHub y pushear el código.

## Opción 1: Usar GitHub CLI (Recomendado)

Si tenés `gh` instalado:

```bash
# Autenticate (si no lo hiciste ya)
gh auth login

# Crear el repo
gh repo create mcd-dashboard \
  --source=. \
  --remote=origin \
  --public \
  --description="McDonald's Dashboard — Component Library + Storybook + Design System"

# Push inicial
git push -u origin main
```

## Opción 2: Crear manualmente en GitHub

1. Ve a https://github.com/new
2. **Repository name:** `mcd-dashboard`
3. **Description:** `McDonald's Dashboard — Component Library + Storybook + Design System`
4. **Visibility:** Private (luego cambiar si es necesario)
5. **Initialize:** No (ya tenemos estructura)
6. Click "Create repository"

Luego, en tu terminal:

```bash
cd /Users/nicolasvilar/Documents/Arcos\ Dorados/66_claude/mcd-dashboard

# Inicializar git
git init

# Agregar archivos
git add .

# Commit inicial
git commit -m "initial: create monorepo structure with components, tokens, and storybook"

# Agregar remote (reemplaza <tu-usuario> por nvilar-ndd)
git remote add origin https://github.com/nvilar-ndd/mcd-dashboard.git

# Cambiar rama a main si es necesario
git branch -M main

# Push
git push -u origin main
```

## Próximos pasos

1. **Instalar dependencias localmente:**
   ```bash
   cd /Users/nicolasvilar/Documents/Arcos\ Dorados/66_claude/mcd-dashboard
   npm install
   ```

2. **Iniciar Storybook:**
   ```bash
   npm run storybook
   ```

3. **Migrar componentes existentes** desde el dashboard actual

4. **Configurar Storybook según necesidades** (addons, temas, etc.)

5. **Documentar primeros componentes** en Storybook

6. **Crear historias** para patrones, guías, tokens

## Notas

- El repositorio está configurado como **monorepo con workspaces**
- Cada package es versionado independientemente
- El versionado sigue **semver** (0.1.0 → 0.2.0, etc.)
- La documentación vive en Storybook + este README
