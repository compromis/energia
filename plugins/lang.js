import { watch, ref } from 'vue'

import val from '../lang/val'
import cas from '../lang/cas'

export default defineNuxtPlugin(() => {
  const route = useRoute()
  const strings = { val, cas }
  const locales = { index: 'val', cas: 'cas' }
  const routeName = ref(route.name)

  watch(() => route.name, (newRoute) => {
    routeName.value = newRoute
  })

  const t = (string) => {
    const parts = string.split('.')

    return strings[locales[routeName.value]][parts[0]][parts[1]]
  }

  return {
    provide: {
      t,
      strings
    }
  }
})
