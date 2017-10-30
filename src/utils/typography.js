import Typography from 'typography'
import noriegaTheme from 'typography-theme-noriega'

const typography = new Typography(noriegaTheme)

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
