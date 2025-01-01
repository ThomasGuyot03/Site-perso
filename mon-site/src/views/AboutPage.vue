<template>
  <div class="about-page">
    <div class="content-container">
      <h1 class="animated-title">À propos</h1>
      <p class="description fade-in">
        Bienvenue sur mon site ! Ici, je partage ma passion pour la technologie, le design et le développement web. 
        Mon objectif est de créer des expériences utilisateur fluides et engageantes.
      </p>
      <p class="description fade-in">
        J'ai une expertise dans divers domaines, notamment le développement front-end, le design UX/UI, 
        et l'optimisation des performances web. Chaque projet est pour moi une opportunité d'apprendre et de partager.
      </p>
      <p class="description fade-in">
        Si vous avez des questions ou souhaitez collaborer, n'hésitez pas à me contacter via la page de contact. 
        Merci de votre visite et à bientôt !
      </p>
    </div>

    <!-- Section supplémentaire -->
    <div class="extra-content">
      <h2 class="section-title">Ce que je fais</h2>
      <div class="features">
        <!-- Bloc 1 -->
        <div class="feature-block">
          <img src="path/to/your-image1.jpg" alt="Design" class="feature-image" />
          <h3 class="feature-title">Design créatif</h3>
          <p class="feature-description">
            J'imagine et conçois des designs modernes, élégants et fonctionnels, adaptés à vos besoins et à votre identité.
          </p>
        </div>

        <!-- Bloc 2 -->
        <div class="feature-block">
          <img src="path/to/your-image2.jpg" alt="Développement Web" class="feature-image" />
          <h3 class="feature-title">Développement Web</h3>
          <p class="feature-description">
            Développement de sites web performants, optimisés pour tous les appareils et adaptés aux dernières technologies.
          </p>
        </div>

        <!-- Bloc 3 -->
        <div class="feature-block">
          <img src="path/to/your-image3.jpg" alt="Consulting" class="feature-image" />
          <h3 class="feature-title">Consulting</h3>
          <p class="feature-description">
            Je vous accompagne dans vos projets numériques, de l'idée initiale à la mise en œuvre concrète.
          </p>
        </div>
      </div>

      <!-- Section avec icônes -->
      <h2 class="section-title">Mes compétences</h2>
      <div class="skills">
        <div class="skill">
          <i class="fas fa-code skill-icon"></i>
          <span>HTML / CSS / JavaScript</span>
        </div>
        <div class="skill">
          <i class="fas fa-laptop-code skill-icon"></i>
          <span>Vue.js / React</span>
        </div>
        <div class="skill">
          <i class="fas fa-pencil-alt skill-icon"></i>
          <span>UI/UX Design</span>
        </div>
        <div class="skill">
          <i class="fas fa-database skill-icon"></i>
          <span>Node.js / MongoDB</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style scoped>
/* Conteneur principal */
.about-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #fff;
  background-color: transparent; /* Fond cohérent avec le reste du site */
  margin-top: 80px; /* Ajoute de l'espace au-dessus */
}


/* Conteneur du texte principal */
.content-container {
  text-align: center;
  max-width: 600px;
  margin-bottom: 40px;
}

/* Animations */
.animated-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ffffff;
  text-transform: uppercase;
  animation: fadeInMove 1s ease-in-out;
}

.description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 15px;
  animation: fadeIn 1.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInMove {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Section supplémentaire */
.extra-content {
  width: 100%;
  max-width: 1200px;
  text-align: center;
  margin-top: 20px;
}

/* Titre des sections */
.section-title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #ffffff;
  animation: fadeInMove 1s ease-in-out;
}

/* Blocs de fonctionnalités */
.features {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.feature-block {
  background-color: rgba(43, 43, 43, 0.8);
  border-radius: 10px;
  padding: 20px;
  width: 30%;
  min-width: 280px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
  animation: fadeIn 1.5s ease-in-out;
}

.feature-image {
  max-width: 100%;
  border-radius: 5px;
  margin-bottom: 15px;
}

.feature-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #ffffff;
}

.feature-description {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
}

/* Compétences */
.skills {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.skill {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
}

.skill-icon {
  font-size: 2rem;
  color: #ffffff;
}
</style>
