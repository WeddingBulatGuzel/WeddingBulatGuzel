import { createApp } from 'vue';
import App from './App.vue';
import VueEasyLightbox from 'vue-easy-lightbox';
import '../style.css'

const app = createApp(App);
app.use(VueEasyLightbox);
app.mount('#app'); 