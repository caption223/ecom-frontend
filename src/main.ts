import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';

import BaseLayout from './components/BaseLayout.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { 
    faChevronLeft,
    faChevronRight 
} from '@fortawesome/free-solid-svg-icons'

const app = createApp(App);

library.add(
    faChevronLeft,
    faChevronRight,
);
app.use(createPinia());
app.use(router);
app.component('BaseLayout', BaseLayout);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
