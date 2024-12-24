<template>
  <div class="home-page">
    <!-- Section introduction -->
    <section class="intro">
      <h1>Création de Sites Web et Applications Web Performants</h1>
      <p>
        Nous créons des sites web sur mesure et des applications web interactives
        qui répondent parfaitement aux besoins de votre entreprise. Grâce à
        notre expertise en développement web, nous vous offrons des solutions
        innovantes, performantes et optimisées pour le référencement (SEO).
        Transformez votre présence en ligne avec des designs modernes et une
        expérience utilisateur exceptionnelle.
      </p>
    </section>

    <!-- Section avec des images -->
    <section class="image-gallery">
      <h2>Nos projets récents</h2>
      <div class="gallery">
        <img src="https://via.placeholder.com/300" alt="Image 1" />
        <img src="https://via.placeholder.com/300" alt="Image 2" />
        <img src="https://via.placeholder.com/300" alt="Image 3" />
      </div>
    </section>

    <!-- Section des technologies -->
    <section class="technology-strip">
      <div class="tech-container">
        <div v-for="(tech, index) in visibleTechnologies" :key="index" class="tech-item">
          <img :src="tech.src" :alt="tech.name" />
          <span>{{ tech.name }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";

// Technologies à afficher
const technologies = [
  { name: "HTML", src: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
  { name: "CSS", src: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
  { name: "Bulma", src: "https://i.postimg.cc/m1Hxh2zL/icons8-bulma-io-48.png" },
  { name: "Vue.js", src: "https://i.postimg.cc/8sPjs8zh/icons8-vue-js-48.png" },
  { name: "Node.js", src: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png" },
  { name: "Python", src: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
];

// Liste visible des technologies
const visibleTechnologies = reactive([]);

// Fonction pour dupliquer les éléments pour un défilement continu
const duplicateItems = () => {
  // Répéter les éléments 10 fois
  for (let i = 0; i < 10; i++) {
    visibleTechnologies.push(...technologies);
  }
};

onMounted(() => {
  duplicateItems();
});
</script>

<style scoped>
.home-page {
  margin-top: 60px;
  padding: 20px;
  color: #fff;
  text-align: center;
}

/* Section introduction */
.intro {
  margin-bottom: 30px;
}

.intro h1 {
  font-size: 3rem;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  color: #ff6363;
  margin-bottom: 20px;
  text-align: center;
}

.intro p {
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  line-height: 1.8;
  color: #e0e0e0;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

/* Section galerie */
.image-gallery .gallery {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.image-gallery img {
  border-radius: 8px;
}

/* Bande technologique */
.technology-strip {
  margin-top: 30px;
  background-color: #353535;
  padding: 20px 0;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  width: 50%; /* Réduit la bande à 50% de la largeur de l'écran */
  margin: 0 auto;
  height: 80px;
}

.tech-container {
  display: flex;
  gap: 20px;
  position: relative;
  animation: scroll 20s linear infinite; /* Animation de défilement */
  width: 100%; /* Assurez-vous que la largeur est de 100% pour qu'il n'y ait pas de débordement */
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  text-align: center;
  position: relative;
}

.tech-item img {
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
}

.tech-item span {
  color: #fff;
  font-size: 0.9rem;
  font-family: 'Roboto', sans-serif;
}

/* Animation pour le défilement */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%); /* S'assurer que l'animation déplace les logos jusqu'à la fin du conteneur */
  }
}


</style>

