import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import { useREM } from './utils/flexible'
import useTheme from './utils/theme'
import mLibs from './libs/index'
import 'virtual:svg-icons-register'

useREM()
useTheme()

const app = createApp(App)

app.use(mLibs)
app.mount('#app')
