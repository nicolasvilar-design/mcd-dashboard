# Guía de Migración — Componentes Existentes

Instrucciones para migrar componentes del dashboard actual a este repo.

## 📋 Checklist de Migración

Para cada componente que migres:

- [ ] Copiar archivo de componente a `packages/components/src/`
- [ ] Renombrar archivos a **kebab-case** (ej: `ButtonPrimary.tsx` → `button-primary.tsx`)
- [ ] Actualizar imports internos (kebab-case)
- [ ] Exportar en `packages/components/src/index.ts`
- [ ] Crear `.stories.tsx` en `packages/storybook/stories/`
- [ ] Documentar props y variantes
- [ ] Testear que compile sin errores
- [ ] Commit: `feat: migrate ButtonPrimary component`

## 🏗️ Estructura de Carpetas

```
packages/components/src/
├── button/
│   ├── button-primary.tsx
│   ├── button-secondary.tsx
│   └── index.ts
├── card/
│   ├── card-container.tsx
│   ├── card-header.tsx
│   └── index.ts
├── modal/
│   ├── modal-dialog.tsx
│   └── index.ts
└── index.ts (exporta todo)
```

## 📝 Ejemplo: Migrar un Componente

### 1. Copiar y renombrar
```bash
# Copiar Button.tsx → button-primary.tsx
cp packages/components/src/Button.tsx packages/components/src/button/button-primary.tsx
```

### 2. Actualizar imports internos
```tsx
// Antes
import { useStyles } from '../styles/useStyles'

// Después
import { useStyles } from '../../tokens' // si usa tokens
```

### 3. Exportar en index.ts
```typescript
// packages/components/src/button/index.ts
export { ButtonPrimary } from './button-primary';

// packages/components/src/index.ts
export * from './button';
```

### 4. Crear historia en Storybook
```typescript
// packages/storybook/stories/button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonPrimary } from '@mcd-dashboard/components';

const meta = {
  title: 'Components/Button/Primary',
  component: ButtonPrimary,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
} satisfies Meta<typeof ButtonPrimary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'Click me' },
};

export const Disabled: Story = {
  args: { label: 'Disabled', disabled: true },
};

export const Large: Story = {
  args: { label: 'Large Button', size: 'lg' },
};
```

### 5. Testear
```bash
npm install
npm run storybook
# Verifica que el componente aparezca y funcione en Storybook
```

### 6. Commit
```bash
git add .
git commit -m "feat: migrate ButtonPrimary component to mcd-dashboard"
git push
```

## 🔗 Integración con Figma (Code Connect)

Una vez migrado, mapea el componente en Figma:

1. Abre el design system en Figma
2. Selecciona el componente
3. Usa Code Connect para mapear:
   - **Source:** `packages/components/src/button/button-primary.tsx`
   - **Component:** `ButtonPrimary`
   - **Framework:** React

Esto vincula automáticamente el código con el diseño.

## 📚 Documentación de Props

Asegúrate de documentar cada prop:

```tsx
interface ButtonPrimaryProps {
  /** Label del botón */
  label: string;
  /** Si está deshabilitado */
  disabled?: boolean;
  /** Tamaño del botón */
  size?: 'sm' | 'md' | 'lg';
  /** Callback al hacer click */
  onClick?: () => void;
}
```

## 🎯 Próximos Pasos

1. Identifica los N componentes más usados del dashboard
2. Crea un plan de migración (qué semana migras qué)
3. Migra en lotes pequeños (5-10 componentes por sprint)
4. Documenta tokens (colores, spacing, tipografía) en Storybook
5. Crea guías de uso para patrones comunes

---

**Tip:** Migra componentes de abajo hacia arriba (botones → cards → layouts). Esto minimiza dependencias.
