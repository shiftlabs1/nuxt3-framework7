import Framework7 from 'framework7/lite-bundle'
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle'

export default defineNuxtPlugin((nuxtApp) => {
  Framework7.use(Framework7Vue)
  registerComponents(nuxtApp.vueApp)
})
