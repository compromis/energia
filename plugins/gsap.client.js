import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(CustomEase, ScrollTrigger, ScrollSmoother)

export default defineNuxtPlugin(() => {
  return {
    provide: {
      gsap,
      CustomEase,
      ScrollTrigger,
      ScrollSmoother
    }
  }
})
