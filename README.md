# McDonald's Dashboard — Component Library + Storybook + Design System

Herramienta centralizada para documentar, versionar y mantener todos los componentes del dashboard de McDonald's.

## 📦 Estructura

```
packages/
├── components/        # Componentes React/Vue + código fuente
├── tokens/           # Design tokens (colores, spacing, tipografía, etc.)
└── storybook/        # Configuración de Storybook + historias
```

## 🚀 Primeros pasos

### Instalación
```bash
npm install
```

### Ejecutar Storybook
```bash
npm run storybook
```

Storybook estará disponible en `http://localhost:6006`

### Construir para producción
```bash
npm run build
npm run build-storybook
```

## 📝 Naming Conventions

- **Componentes/archivos:** kebab-case (ej: `button-primary.tsx`, `card-container.vue`)
- **Variables JS:** camelCase (ej: `isPrimaryButton`, `isDisabled`)
- **Clases CSS:** kebab-case (ej: `.button-primary`, `.card-container`)

## 🎨 Documentación

Cada componente debe tener:
- ✅ Historias en Storybook (`.stories.ts` o `.stories.tsx`)
- ✅ Props documentadas
- ✅ Ejemplos de uso
- ✅ Variantes principales
- ✅ Estados (hover, disabled, loading, etc.)

## 🔗 Integración con Figma

Los componentes están linkeados a Figma via Code Connect. Cuando actualices un componente:
1. Actualiza el código
2. Actualiza la historia en Storybook
3. Sincroniza el mapping en Figma

## 📌 Versionado

Usamos Semantic Versioning (semver):
- **MAJOR:** cambios que rompen compatibilidad
- **MINOR:** nuevas features sin romper compatibilidad
- **PATCH:** bugfixes

Ej: `0.1.0` → `0.2.0` (nueva feature) o `0.1.1` (bugfix)

## 👥 Acceso

- **Fase 1 (actual):** Equipo UX interno
- **Fase 2 (próxima):** Equipo de desarrollo

## 📚 Recursos

- Design system: Figma (fuente de verdad)
- Documentación: Este repo
- Gestión de contenidos: Lokalise (para textos multilingües)

---

**Líder UX:** Nicolás Vilar  
**Estado:** En desarrollo activo
