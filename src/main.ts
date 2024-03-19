import './styles.css'
import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { fr } from '@formkit/i18n' // Importez le français
import router from './router'

const app = createApp(App)

app.use(router)
app.use(plugin, defaultConfig({
  locales: { fr }, // Ajoutez les locales françaises
  locale: 'fr',    // Définissez le français comme locale par défaut
}))
app.mount('#app')
