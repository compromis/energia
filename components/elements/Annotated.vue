<template>
  <span :id="`annotation-${id}`"><slot /></span>
</template>

<script setup>
import { annotate } from 'rough-notation'

const { $gsap } = useNuxtApp()
const hasAnimated = ref(false)

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'underline'
  },
  color: {
    type: String,
    default: 'yellow'
  },
  delay: {
    type: Number,
    default: 0
  }
})

onMounted(() => {
  $gsap.to(`#annotation-${props.id}`, {
    scrollTrigger: {
      trigger: `#annotation-${props.id}`,
      start: 'top 80%',
      end: '+=200',
      onToggle: () => {
        if (!hasAnimated.value) {
          const color = props.color === 'blue' ? '#cee8ef' : props.type === 'highlight' ? '#f3b955' : '#f4520b'
          const highlighted = ['highlight', 'crossed-off', 'strike-through'].includes(props.type) ? { color } : {}
          const animation = annotate(document.getElementById(`annotation-${props.id}`), { type: props.type, strokeWidth: 4, multiline: true, ...highlighted })
          setTimeout(() => { animation.show() }, props.delay * 1000)
        }
        hasAnimated.value = true
      }
    }
  })
})
</script>