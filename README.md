# Socio Component Library

**Install**

```bash
npm i @socio-development/components
```

**Usage**

```javascript
import {
  Alert,
  Button,
  ButtonGroup,
  ContactLink,
  Modal,
  Placeholder,
  Spinner
} from '@socio-development/components'

const myButton = <Button label="Click me" mode="primary" shape="pill" />
```

## Constructing components

Component names are capitalized.

```javascript
<Component />
```

Sub-components are objects within the main component.

```javascript
<Component>
  <Component.Subcomponent />
</Component>
```

Components must have their name as the root class.

```javascript
export function Component() {
  return (
    <div className="Component" />
  )
}
```

Nested component elements should have a class name written as `Component__element`.

```typescript
export function Component({
  footer,
  title
}: ComponentProps) {
  return (
    <div className="Component">
      <h1 className="Component__title">{ title }</h1>
      <h5 className="Component__footer">{ footer }</h5>
    </div>
  )
}
```

> Notice above how the listed props are alphabetized.

If the component takes elements as props, these elements must be inside a container with the `Component__content` class.

```typescript
export function Component({
  children,
  title
}: ComponentProps) {
  return (
    <div className="Component">
      <h1 className="Component__title">{ title }</h1>
      <div className="Component__content">{ children }</div>
    </div>
  )
}
```

### Modifiers and props

The two most common modifiers for this library is `mode` (primary, success, danger) and `shape` (the component roundness). When applying modifications to a component, use classes written as `Component--mod-value`.

```typescript
export function Component({
  mode = 'primary',
  shape = 'soft'
}: ComponentProps) {
  return (
    <div
      className={[
        'Component',
        `Component--mode-${mode}`,
        `Component--shape-${shape}`
      ].join(' ')}
    />
  )
}
```

> Notice the use of `Array.join()` which helps keep our code structured and nice looking.
