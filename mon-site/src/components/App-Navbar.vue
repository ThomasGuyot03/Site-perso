<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- Menu Hamburger -->
      <div class="hamburger" @click="toggleMenu">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>

      <!-- Menu de navigation -->
      <ul class="nav-links" :class="{ 'show-menu': isMenuOpen }">
        <!-- Utilisation de router-link pour la navigation -->
        <li><router-link to="/" class="nav-item" active-class="active">Home</router-link></li>
        <li><router-link to="/askQuestion" class="nav-item" active-class="active">Contact</router-link></li>
      </ul>

      <!-- Bouton principal -->
      <a href="#" class="cta-button">Let’s Work Together</a>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
/* Styles de la navbar (inchangés) */
.navbar {
  position: absolute;
  top: 2%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  background-color: #353535;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

/* Conteneur de navigation */
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Liens de navigation */
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
}

.nav-item {
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: background-color 0.3s ease;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ff6363;
}

.active {
  background-color: rgba(255, 255, 255, 0.2);
}

/* Bouton principal */
.cta-button {
  background-color: #ff6363;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.cta-button:hover {
  background-color: #ff4343;
  transform: scale(1.05);
}

/* Hamburger Menu */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 0.4rem;
}

.hamburger .line {
  width: 25px;
  height: 3px;
  background-color: #fff;
  border-radius: 2px;
  transition: transform 0.3s ease;
}

/* Responsive Styles */
@media screen and (max-width: 768px) {
  /* Cacher les liens par défaut */
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #353535;
    padding: 1rem;
    border-radius: 10px;
    width: 90%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }

  .nav-links.show-menu {
    display: flex;
  }

  /* Afficher le hamburger */
  .hamburger {
    display: flex;
  }

  /* Cacher le bouton CTA sur mobile */
  .cta-button {
    display: none;
  }
}
</style>
