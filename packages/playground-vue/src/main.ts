import './assets/main.css'
import '@all-in-material/component-vue/all-in-material-vue-ts.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AllInMaterialVue from '@all-in-material/component-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(AllInMaterialVue)

app.mount('#app')
