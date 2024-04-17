import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'SkysailBookmarks',

  setup () {
    return () => h(QBadge, {
      class: 'SkysailBookmarks',
      label: 'SkysailBookmarks'
    })
  }
}
