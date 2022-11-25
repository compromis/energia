import val from '../lang/val'
import cas from '../lang/cas'

export default defineNuxtPlugin(() => {
  const route = useRoute()
  const strings = route.name === 'cas' ? cas : val

  const t = (string) => {
    const parts = string.split('.')
    return strings[parts[0]][parts[1]]
  }

  return {
    provide: {
      t,
      strings
    }
  }
})
