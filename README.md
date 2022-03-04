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

Subcomponents are objects within the component.

```javascript
<Component>
  <Component.Subcomponent />
</Component>
```

Every component has their name as the main class identifier.

```javascript
export function Component() {
  return (
    <div className="Component" />
  )
}
```

Nested component elements should have a class name written in BEM-syntax.

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

If the component takes elements as props, these elements should be inside a container with the `Component__content` class.

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

The two most common modifiers for this library is `mode` (primary, success, danger) and `shape` (the component roundness). 
