import App from './src/components/App.svelte'

import './src/scss/_reset.scss'
import './src/scss/_color-palette.scss'
import './src/scss/_styles.scss'

const app = new App({
  target: document.body,
})

export default app
