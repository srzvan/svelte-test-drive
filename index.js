import App from './src/components/App.svelte'

import './src/scss/config/_normalize.scss'
import './src/scss/config/_variables.scss'
import './src/scss/vendor/_bulma.scss'

const app = new App({
  target: document.body,
  // props: {
  // 	name: 'mother'
  // }
})

export default app
