import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.css'
import { useREM } from './utils/flexible'
import useTheme from './utils/theme'
import mLibs from './libs/index'
import mDirectives from './directives/index'
import './premission'
import 'virtual:svg-icons-register'

useREM()
useTheme()

const app = createApp(App)

app.use(router)
app.use(store)
app.use(mLibs)
app.use(mDirectives)
app.mount('#app')
