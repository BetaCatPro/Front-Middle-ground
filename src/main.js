import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import { useREM } from './utils/flexible'
import mLibs from './libs/index'
import 'virtual:svg-icons-register'

useREM()

const app = createApp(App)

app.use(mLibs)
app.mount('#app')
