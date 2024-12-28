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
    <!-- Nouvelle section avec un titre, texte et image -->
    <section class="additional-section">
  <div class="content-container">
    <div class="text-content">
      <h2>Sites Web Responsives</h2>
      <p>
        Nous concevons des sites web parfaitement adaptables à tous les appareils, qu'il s'agisse de smartphones, tablettes ou ordinateurs. Grâce à notre expertise en design responsive, nous assurons une expérience utilisateur fluide et optimisée sur tous les écrans. Votre site sera non seulement esthétique mais également performant, quelle que soit la taille de l'appareil utilisé.
      </p>
    </div>
    <div class="image-content">
      <img src="https://i.postimg.cc/C1BpxXMX/310e2245-30f2-4f46-afab-2f3989c9ca3e.png" alt="Sites Responsives" />
    </div>
  </div>
</section>

<section class="faq-section">
  <h2>Questions Fréquemment Posées</h2>
  <div class="faq-container">
    <div 
      class="faq-item" 
      v-for="(faq, index) in faqs" 
      :key="index"
    >
      <div class="faq-question" @click="toggleAnswer(index)">
        <h3>{{ faq.question }}</h3>
        <i :class="faq.open ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"></i>
      </div>
      <div class="faq-answer" v-if="faq.open">
        <p>{{ faq.answer }}</p>
      </div>
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
    "Maîtrise des principes fondamentaux du design, tels que la mise en page, la théorie des couleurs, la typographie et la hiérarchie visuelle.",
  },
  {
    icon: "fa-solid fa-paint-brush",
    title: "User Interface (UI) Design",
    description:
    "Capacité à créer des interfaces utilisateurs visuellement attrayantes et intuitives qui améliorent l'expérience et l'engagement des utilisateurs.",
  },
  {
    icon: "fa-solid fa-user-check",
    title: "User Experience (UX) Design",
    description:
    "Compréhension du comportement et de la psychologie des utilisateurs pour concevoir des expériences utilisateur fluides et agréables.",
  },
  {
    icon: "fa-solid fa-sitemap",
    title: "Wireframing and Prototyping",
    description:
    "Capacité à créer des wireframes et des prototypes interactifs pour visualiser et tester la disposition et la fonctionnalité des sites web.",
  },
  {
    icon: "fa-solid fa-mobile-alt",
    title: "Mobile-Friendly Optimization",
    description:
    "Connaissance des techniques pour optimiser les sites web pour les appareils mobiles, garantissant une expérience fluide sur les écrans plus petits.",
  },
  {
    icon: "fa-solid fa-code",
    title: "Custom Development",
    description:
    "Maîtrise du développement personnalisé pour créer des solutions web sur mesure adaptées aux besoins spécifiques des projets.",
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

// Liste des FAQs
const faqs = reactive([
  {
    question: "Quels services offrez-vous pour le développement web ?",
    answer: "Nous offrons une gamme complète de services incluant la création de sites web, la conception UX/UI, le développement sur mesure et l'optimisation SEO.",
    open: false,
  },
  {
    question: "Proposez-vous des solutions pour rendre les sites web responsives ?",
    answer: "Oui, tous nos projets sont optimisés pour fonctionner parfaitement sur tous les appareils, y compris les mobiles et tablettes.",
    open: false,
  },
  {
    question: "Combien de temps faut-il pour créer un site web ?",
    answer: "Le délai de livraison dépend de la complexité du projet, mais cela prend généralement entre 4 et 8 semaines.",
    open: false,
  },
  {
    question: "Offrez-vous un support après la mise en ligne du site ?",
    answer: "Oui, nous offrons un support continu pour assurer la maintenance et les mises à jour nécessaires.",
    open: false,
  },
]);

// Fonction pour basculer l'affichage des réponses
const toggleAnswer = (index) => {
  faqs[index].open = !faqs[index].open;
};

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
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px; 
  width: 80%;
  margin: 0 auto;
  justify-content: center;
}

.card {
  background: #1c1c1c; 
  padding: 20px;
  border-radius: 15px; 
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid #444; 
}

.card:hover {
  transform: translateY(-10px); 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
}

.card .icon {
  width: 80px; 
  height: 80px; 
  border-radius: 50%; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2a2a2a;
  margin: 0 auto 20px; 
  font-size: 2rem; 
  color: #4caf50; 
}

.card h3 {
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff; 
}

.card p {
  font-size: 1rem;
  color: #b0b0b0; 
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
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px;
  width: 80%;
  margin: 0 auto; 
}

.service-card {
  background: rgba(0, 0, 0, 0.5); 
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.2); 
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
  background-color: rgba(42, 42, 42, 0.8); 
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

/* Nouvelle section */
.additional-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  padding: 20px;
  color: #fff;
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.text-content {
  flex: 1;
  margin-right: 20px;
}

.text-content h2 {
  font-size: 2.5rem;
  font-family: 'Poppins', sans-serif;
  color: #ff6363;
  margin-bottom: 20px;
}

.text-content p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #e0e0e0;
}

.image-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-content img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}


/* Section FAQ */
.faq-section {
  margin-top: 50px;
  padding: 20px;
  text-align: center;
  color: #fff;
}

.faq-section h2 {
  font-size: 2.5rem;
  font-family: 'Poppins', sans-serif;
  color: #ff6363;
  margin-bottom: 30px;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 20px;
  background: #1c1c1c;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.faq-question i {
  font-size: 1.2rem;
  color: #ff6363;
}

.faq-answer {
  margin-top: 10px;
  font-size: 1rem;
  color: #b0b0b0;
  line-height: 1.6;
}
</style>
