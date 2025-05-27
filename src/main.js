import './assets/main.css'

import { createApp, ref, provide, h } from 'vue'
import App from './App.vue'

const theme = ref('dark')

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.classList.toggle('dark', theme.value === 'dark')
}

document.documentElement.classList.toggle('dark', theme.value === 'dark')

const app = createApp({
  setup() {
    provide('theme', theme)
    provide('toggleTheme', toggleTheme)
  },
  render: () => h(App)
})

app.mount('#app')

export { theme, toggleTheme }
