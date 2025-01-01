import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AskQuestion from '../views/AskQuestion.vue';
import AboutPage from '../views/AboutPage.vue'; // Chemin corrigé
import BlogPage from '../views/BlogPage.vue'; // Chemin corrigé

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/askQuestion',
    name: 'AskQuestion',
    component: AskQuestion,
  },
  {
    path: '/about', // Gardez les URLs en minuscule pour les conventions web
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/blog', // Gardez les URLs en minuscule pour les conventions web
    name: 'BlogPag',
    component: BlogPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
