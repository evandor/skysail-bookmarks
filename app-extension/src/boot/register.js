import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-skysail-bookmarks'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
