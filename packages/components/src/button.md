# Button Component

## Overview
The Button component is the primary call-to-action element in McDonald's Dashboard. It supports multiple variants, sizes, and states.

## Variants

### Primary (Default)
- **Color:** McDonald's Red (#DA291C)
- **Usage:** Main actions, primary CTAs
- **States:** Default, Hover, Active, Disabled

### Secondary
- **Color:** Light Gray (#E8E8E8)
- **Usage:** Secondary actions, less important CTAs
- **Contrast:** Text on light background

### Tertiary
- **Color:** Transparent background, text color
- **Usage:** Minimal actions, links styled as buttons
- **Best for:** Subtle, low-priority actions

## Sizes

| Size   | Padding (vertical/horizontal) | Font Size | Height |
|--------|-------------------------------|-----------|--------|
| Small  | 8px / 12px                    | 12px      | 32px   |
| Medium | 8px / 16px                    | 14px      | 40px   |
| Large  | 12px / 24px                   | 16px      | 48px   |

## Props

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary'; // Default: 'primary'
  size?: 'small' | 'medium' | 'large';             // Default: 'medium'
  fullWidth?: boolean;                             // Default: false
  isLoading?: boolean;                             // Default: false
  disabled?: boolean;                              // Default: false
  icon?: React.ReactNode;                          // Left side icon
  iconRight?: React.ReactNode;                     // Right side icon
  children?: React.ReactNode;                      // Button text
}
```

## Usage Examples

### Basic Button
```jsx
<Button>Click me</Button>
```

### With Icon
```jsx
<Button icon="🔒" variant="secondary">
  Lock
</Button>
```

### Loading State
```jsx
<Button isLoading variant="primary">
  Saving...
</Button>
```

### Full Width
```jsx
<Button fullWidth variant="primary">
  Submit Form
</Button>
```

## Accessibility

- Supports keyboard navigation (Tab, Enter, Space)
- Disabled state prevents interaction
- Focus states follow WCAG guidelines
- Loading spinner provides visual feedback
- Icons used alongside text labels

## States

| State    | Cursor       | Opacity | Background                      |
|----------|--------------|---------|----------------------------------|
| Default  | pointer      | 1       | Variant color                    |
| Hover    | pointer      | 1       | Darkened variant color           |
| Active   | pointer      | 1       | More darkened variant color      |
| Disabled | not-allowed  | 0.6     | Gray (#BDBDBD)                   |
| Loading  | wait         | 1       | Variant color with spinner       |

## Animation

- Transition duration: 150ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1) (Material Design standard)
- Properties: All (background-color, text-color, etc.)

## Best Practices

✅ **Do:**
- Use primary for main actions
- Use secondary for alternative options
- Use tertiary for less important actions
- Include icons to enhance clarity
- Provide loading state during async operations

❌ **Don't:**
- Use multiple primary buttons in same context
- Use buttons for navigation (use links instead)
- Use very long text labels
- Disable without explaining why
- Use without proper contrast

## Related Components

- **Link:** For navigation
- **ButtonGroup:** For grouped button actions
- **Toggle:** For binary selections
- **Select:** For multiple options
