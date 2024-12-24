import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router) // Assurez-vous que le router est utilisé ici
  .mount('#app');
