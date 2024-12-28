import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.min.css';

createApp(App)
  .use(router) // Assurez-vous que le router est utilisé ici
  .mount('#app');


  router.beforeEach((to, from, next) => {
    // Modifie le titre de la page
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    
    // Met à jour les meta descriptions
    const metaTag = document.querySelector('meta[name="description"]');
    if (metaTag && to.meta.metaTags) {
      metaTag.setAttribute('content', to.meta.metaTags[0].content);
    }
  
    next();
  });
  