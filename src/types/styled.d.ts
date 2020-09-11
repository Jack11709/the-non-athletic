// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    isDark: boolean
    black: string
    fontWhite: string
    fontMain: string
    grey: string
    fontGrey: string
    background: string
  }
}
