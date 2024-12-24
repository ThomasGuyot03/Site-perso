import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  // Ajoutez ici d'autres routes pour d'autres pages
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
