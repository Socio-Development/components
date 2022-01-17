# Release Notes

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

- Running `npm run sb` will no longer open a new browser window. A new script `npm run sb:open` was created to mimic the old behaviour.
- Moved exported components into a new Storybook group called "Featured" to separate them from utility components.
- Removed `default` exports from all components.
- Configured all stories to better support TypeScript.
- Add `ButtonClose` to `Alert`.

### Other

- Updated Storybook to `v6.4.12`.

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
