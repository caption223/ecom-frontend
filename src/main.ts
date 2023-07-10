import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.scss';

import BaseLayout from './components/BaseLayout.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { 
    faBars,
    faCartShopping,
    faChevronLeft,
    faChevronRight, 
    faEnvelope, 
    faLocationDot, 
    faMagnifyingGlass,
    faPhone,
    
} from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faSquareInstagram, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'

const app = createApp(App);

library.add(
    faChevronLeft,
    faChevronRight,
    faBars,
    faMagnifyingGlass,
    faCartShopping,
    faSquareFacebook,
    faPhone,
    faEnvelope,
    faLocationDot,
    faSquareInstagram,
    faSquareTwitter
);
app.use(createPinia());
app.use(router);
app.component('BaseLayout', BaseLayout);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
