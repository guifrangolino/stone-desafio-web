import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      primary_surface: string
      secondary: string
      tertiary: string
      hover: string
    }
  }
}
