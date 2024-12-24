<template>
  <div id="app">
    <Navbar />
    <router-view />

    <!-- Grille animée avec des carrés alignés -->
    <div class="animated-squares">
      <div
        v-for="square in squares"
        :key="'square-' + square.id"
        class="square"
        :style="{
          top: `${square.row * 50}px`,
          left: `${square.col * 50}px`,
          animationDelay: `${square.delay}s`
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/App-Navbar.vue'; // Importation du composant Navbar

const gridSize = 50; // Taille des cellules de la grille
const rows = Math.ceil(window.innerHeight / gridSize); // Nombre de lignes
const cols = Math.ceil(window.innerWidth / gridSize); // Nombre de colonnes

// Génération des carrés animés
const squares = Array.from({ length: 10 }, (_, id) => ({
  id,
  row: Math.floor(Math.random() * rows), // Ligne aléatoire
  col: Math.floor(Math.random() * cols), // Colonne aléatoire
  delay: Math.random() * 2, // Délai entre 0 et 10 secondes
}));
</script>

<style>
/* Arrière-plan principal */
body {
  margin: 0;
  background-color: #2b2b2b;
  color: #fff;
  font-family: Arial, sans-serif;
}

#app {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Grille animée */
.animated-squares {
  position: fixed; /* Couvrir tout l'écran */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Derrière tous les éléments */
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px; /* Taille de la grille */
  pointer-events: none; /* Ne bloque pas les clics */
}

/* Style des carrés */
.square {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #2c2c2c;
  animation: fadeInOut 5s infinite;
  animation-timing-function: ease-in-out;
}

/* Animation des carrés */
@keyframes fadeInOut {
  0%, 100% {
    background-color: #2c2c2c;
  }
  50% {
    background-color: rgba(80, 80, 80, 0.6);
  }
}
</style>
