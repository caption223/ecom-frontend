import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.scss'

import BaseLayout from './components/BaseLayout.vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('BaseLayout', BaseLayout);

app.mount('#app')
