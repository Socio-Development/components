import ColorPalette from './style/ColorPalette'
import ColorTheme from './style/ColorTheme'
import {
  TColorName,
  TColorObject,
  TColorPalette,
  Shape,
  TColorTheme
} from './typings/types'

export class ThemeColor {
  private _background: string
  private _backgroundHover: string
  private _color: TColorName
  private _contrast: 'dark' | 'light'
  private _foreground: string
  private _shade: TColorObject

  constructor(color: TColorName) {
    this._color = color
    this._contrast = this.setContrast()
    this._background = ColorPalette[color][500]
    this._backgroundHover = this.setBackgroundHover()
    this._foreground = this.setForeground()
    this._shade = ColorPalette[color]
  }

  get background() { return this._background }
  get backgroundHover() { return this._backgroundHover }
  get foreground() { return this._foreground }
  get shade() { return this._shade }

  setBackgroundHover() {
    if (this._contrast === 'light')
      return ColorPalette[this._color][600]
    else
      return ColorPalette[this._color][400]
  }
  setContrast() {
    switch (this._color) {
      case 'blue':
      case 'green':
      case 'indigo':
      case 'purple':
      case 'red':
        return 'light'
    
      default:
        return 'dark'
    }
  }
  setForeground() {
    if (this._contrast === 'light')
      return '#fff'
    else
      return '#000'
  }
}

interface IStyle {
  color: TColorPalette & TColorTheme
  shape: { [keys in Shape]: string }
}

export const Style: IStyle = {
  color: {
    ...ColorPalette,
    ...ColorTheme,
  },
  shape: {
    pill: '10rem',
    rounded: '.75rem',
    soft: '.25rem',
    square: '0',
  },
}
