# Release Notes

## 0.2.0

### Features

### Changes

### Other

- Updated Storybook to `6.4.15`.

---

## 0.1.1 (Jan 28, 2022)

### Features

- Added a `size` prop to the `ContactLink` and `Icon` components.

### Changes

- `ButtonClose`, `ContactLink` and `Icon` now inherit color from its parent element.
- `Alert`: Removed `ButtonClose` styling.

---

## 0.1.0 (Jan 17, 2022)

### Features

- Added pointer cursor on `Button` hover.
- Added code-snippet for producing a boilerplate Storybook component story.
- New components:
  - `ContactLink` - Displays either a `mailto:`, or `tel:` link with corresponding icons
  - `Modal` - Alert, confirm, prompt dialog box
- New utility components:
  - `Icon` - Holds svg icons
  - `ButtonClose` - A "dismiss" button
- New icon components:
  - `CloseIcon`
  - `MailIcon`
  - `PhoneIcon`

### Changes

- Removed all CSS from repo and added `*.css` to `.gitignore`.
- Running `npm run sb` will no longer open a new browser window. A new script `npm run sb:open` was created to mimic the old behaviour.
- Moved exported components into a new Storybook group called "Featured" to separate them from utility components.
- Removed `default` exports from all components.
- Configured all stories to better support TypeScript.
- Add `ButtonClose` to `Alert`.

### Other

- Updated Storybook to `6.4.13`.

---

## 0.0.2 (Jan 11, 2022)

### Features

- Added exports for types: `TMode` and `TShape`.

### Changes

- All components now import types from `index.ts`.
- All components now import their styles.

---

## 0.0.1 (Jan 11, 2022)

The first pre-release.
