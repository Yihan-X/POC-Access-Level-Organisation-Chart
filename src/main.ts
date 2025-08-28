import { createApp } from 'vue'
import { Vue3OrgChartPlugin } from 'vue3-org-chart'
import type { App as VueApp } from 'vue'
import App from './App.vue'

import 'vue3-org-chart/dist/style.css'
import './styles/global.css'

const app: VueApp = createApp(App)
app.use(Vue3OrgChartPlugin)
app.mount('#app')