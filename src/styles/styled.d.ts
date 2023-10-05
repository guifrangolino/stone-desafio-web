import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      darkGray: string
      darkGray2: string
      mediumGray2: string
      mediumGray3: string
      white: string
      primary: string
      stoneGreen: string
    }
  }
}
