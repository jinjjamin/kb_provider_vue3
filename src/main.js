import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/common.css'
import './assets/css/layout.css'

createApp(App)
  .use(router)
  .mount('#app')
