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

    <!-- Section compétences -->
    <section class="skills-section">
      <h2>Nos Compétences</h2>
      <div class="cards-container">
        <div class="card" v-for="(card, index) in cards" :key="index">
          <div class="icon">
            <i :class="card.icon"></i>
          </div>
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
        </div>
      </div>
    </section>
      <!-- Section des services -->
      <section class="services-section">
      <h2>Nos Services</h2>
      <div class="services-container">
        <div class="service-card" v-for="(service, index) in services" :key="index">
          <div class="icon">
            <i :class="service.icon"></i>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";

// Données des technologies (pour la bande)
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
  for (let i = 0; i < 10; i++) {
    visibleTechnologies.push(...technologies);
  }
};

onMounted(() => {
  duplicateItems();
});

// Données pour la section compétences
const cards = [
  {
    icon: "fa-solid fa-palette",
    title: "Web Design Principles",
    description:
      "Proficiency in the fundamental principles of design, such as layout, color theory, typography, and visual hierarchy.",
  },
  {
    icon: "fa-solid fa-paint-brush",
    title: "User Interface (UI) Design",
    description:
      "Ability to create visually appealing and intuitive user interfaces that enhance user experience and engagement.",
  },
  {
    icon: "fa-solid fa-user-check",
    title: "User Experience (UX) Design",
    description:
      "Understanding of user behavior and psychology to design seamless and enjoyable user experiences.",
  },
  {
    icon: "fa-solid fa-sitemap",
    title: "Wireframing and Prototyping",
    description:
      "Ability to create wireframes and interactive prototypes to visualize and test website layouts and functionality.",
  },
  {
    icon: "fa-solid fa-mobile-alt",
    title: "Mobile-Friendly Optimization",
    description:
      "Knowledge of techniques to optimize websites for mobile, ensuring a smooth user experience on smaller screens.",
  },
  {
    icon: "fa-solid fa-code",
    title: "Custom Development",
    description:
      "Proficiency in custom development to build tailored web solutions for unique project needs.",
  },
];
const services = [
  {
    icon: "fa-solid fa-chart-line",
    title: "SEO Optimisation",
    description:
      "Améliorez votre visibilité sur les moteurs de recherche avec nos techniques avancées de référencement naturel.",
  },
  {
    icon: "fa-solid fa-paint-brush",
    title: "Web Design",
    description:
      "Des designs modernes et intuitifs qui garantissent une expérience utilisateur exceptionnelle.",
  },
  {
    icon: "fa-solid fa-rocket",
    title: "Performances Web",
    description:
      "Optimisation des performances pour des sites rapides et réactifs, garantissant une expérience fluide.",
  },
];
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
  margin-top: 80px;
}

.intro p {
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  line-height: 1.8;
  color: #e0e0e0;
  max-width: 800px;
  margin: 0 auto;
}

/* Section galerie */
.image-gallery .gallery {
  display: flex;
  justify-content: center;
  gap: 20px;
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
  width: 50%;
  margin: 2% auto;
  height: 80px;
}

.tech-container {
  display: flex;
  gap: 20px;
  position: relative;
  animation: scroll 20s linear infinite;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  text-align: center;
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
    transform: translateX(-100%);
  }
}

/* Section compétences */
.skills-section {
  margin-top: 40px;
  padding: 20px;
}

.skills-section h2 {
  font-size: 2.5rem;
  font-family: 'Poppins', sans-serif;
  color: #ff6363;
  margin-bottom: 30px;
  text-align: center;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colonnes */
  gap: 20px; /* Espacement entre les cartes */
  width: 80%;
  margin: 0 auto;
  justify-content: center;
}

.card {
  background: #1c1c1c; /* Couleur de fond de la carte */
  padding: 20px;
  border-radius: 15px; /* Bordures arrondies */
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Ombre pour l'effet d'élévation */
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid #444; /* Légère bordure pour ressembler au design */
}

.card:hover {
  transform: translateY(-10px); /* Soulève légèrement la carte au survol */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5); /* Accentue l'ombre */
}

.card .icon {
  width: 80px; /* Taille de l'icône */
  height: 80px; /* Taille de l'icône */
  border-radius: 50%; /* Cercle parfait autour de l'icône */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2a2a2a; /* Fond de l'icône */
  margin: 0 auto 20px; /* Centre l'icône et ajoute un espacement */
  font-size: 2rem; /* Taille de l'icône */
  color: #4caf50; /* Couleur de l'icône */
}

.card h3 {
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff; /* Couleur du texte */
}

.card p {
  font-size: 1rem;
  color: #b0b0b0; /* Couleur du paragraphe */
  line-height: 1.6;
}
.services-section {
  margin-top: 50px;
  padding: 20px;
  text-align: center;
}

.services-section h2 {
  font-size: 2.5rem;
  font-family: 'Poppins', sans-serif;
  color: #ff6363;
  margin-bottom: 30px;
}

.services-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colonnes pour afficher les services */
  gap: 20px;
  width: 80%;
  margin: 0 auto; /* Centre la section horizontalement */
}

.service-card {
  background: rgba(0, 0, 0, 0.5); /* Fond semi-transparent */
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.2); /* Bordure fine et transparente */
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
}

.service-card .icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(42, 42, 42, 0.8); /* Cercle avec un fond semi-transparent */
  margin: 0 auto 20px;
  font-size: 2rem;
  color: #4caf50;
}

.service-card h3 {
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
}

.service-card p {
  font-size: 1rem;
  color: #b0b0b0;
  line-height: 1.6;
}
</style>
