import { Mode } from "./typings/types"

interface IStyle {
  colors: {
    palette: TColorPalette
    theme: TColorTheme
  }
}

type TColor = {
  [keys in TColorNumber]: string
}

type TColorNumber = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
type TColorName =
  | 'blue'
  | 'cyan'
  | 'gray'
  | 'green'
  | 'red'
  | 'yellow'

type TColorPalette = {
  [keys in TColorName]: TColor
}

type TColorTheme = {
  [keys in Mode]: {
    background: string
    backgroundHover: string
    foreground: string
  }
}

const ColorPalette: TColorPalette = {
  blue: {
    100: '#cfe2ff',
    200: '#9ec5fe',
    300: '#6ea8fe',
    400: '#3d8bfd',
    500: '#0d6efd',
    600: '#0a58ca',
    700: '#084298',
    800: '#052c65',
    900: '#031633',
  },
  cyan: {
    100: '#cff4fc',
    200: '#9eeaf9',
    300: '#6edff6',
    400: '#3dd5f3',
    500: '#0dcaf0',
    600: '#0aa2c0',
    700: '#087990',
    800: '#055160',
    900: '#032830',
  },
  gray: {
    100: '#f8f9fa',
    200: '#e9ecef',
    300: '#dee2e6',
    400: '#ced4da',
    500: '#adb5bd',
    600: '#6c757d',
    700: '#495057',
    800: '#343a40',
    900: '#212529',
  },
  green: {
    100: '#d1e7dd',
    200: '#a3cfbb',
    300: '#75b798',
    400: '#479f76',
    500: '#198754',
    600: '#146c43',
    700: '#0f5132',
    800: '#0a3622',
    900: '#051b11',
  },
  red: {
    100: '#f8d7da',
    200: '#f1aeb5',
    300: '#ea868f',
    400: '#e35d6a',
    500: '#dc3545',
    600: '#b02a37',
    700: '#842029',
    800: '#58151c',
    900: '#2c0b0e',
  },
  yellow: {
    100: '#fff3cd',
    200: '#ffe69c',
    300: '#ffda6a',
    400: '#ffcd39',
    500: '#ffc107',
    600: '#cc9a06',
    700: '#997404',
    800: '#664d03',
    900: '#332701',
  },
}

class ThemeColor {
  private _background: string
  private _backgroundHover: string
  private _color: TColorName
  private _foreground: string

  constructor(color: TColorName) {
    this._color = color
    this._background = ColorPalette[color][500]
    this._backgroundHover = this.setBackgroundHover()
    this._foreground = this.setForeground()
  }

  get background() { return this._background }
  get backgroundHover() { return this._backgroundHover }
  get foreground() { return this._foreground }

  setBackgroundHover() {
    switch (this._color) {
      case 'blue':
      case 'green':
      case 'red':
        return ColorPalette[this._color][600]
    
      default:
        return ColorPalette[this._color][400]
    }
  }
  setForeground() {
    switch (this._color) {
      case 'blue':
      case 'green':
      case 'red':
        return '#fff'
    
      default:
        return '#000'
    }
  }
}

const ColorTheme: TColorTheme = {
  danger: new ThemeColor('red'),
  dark: {
    background: ColorPalette.gray[900],
    backgroundHover: ColorPalette.gray[800],
    foreground: '#fff',
  },
  default: {
    background: ColorPalette.gray[600],
    backgroundHover: ColorPalette.gray[700],
    foreground: '#fff'
  },
  info: new ThemeColor('cyan'),
  primary: new ThemeColor('blue'),
  success: new ThemeColor('green'),
}

export const Style: IStyle = {
  colors: {
    palette: ColorPalette,
    theme: ColorTheme,
  }
}
