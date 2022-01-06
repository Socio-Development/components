import { ThemeColor } from '../styling'
import { TColorTheme } from '../typings/types'
import ColorPalette from './ColorPalette'

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
  primary: new ThemeColor('orange'),
  success: new ThemeColor('green'),
}

export default ColorTheme
