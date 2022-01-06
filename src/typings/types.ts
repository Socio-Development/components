export type TColorName =
  | 'blue'
  | 'cyan'
  | 'gray'
  | 'green'
  | 'indigo'
  | 'orange'
  | 'purple'
  | 'red'
  | 'teal'
  | 'yellow'

export type TColorNumber = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

export type TColorObject = { [keys in TColorNumber]: string }

export type TColorPalette = { [keys in TColorName]: TColorObject }

export type TColorTheme = {
  [keys in Mode]: {
    background: string
    backgroundHover: string
    foreground: string
  }
}

export type Mode =
  | 'danger'
  | 'dark'
  | 'default'
  | 'info'
  | 'primary'
  | 'success'

export type Shape =
  | 'pill'
  | 'rounded'
  | 'soft'
  | 'square'
