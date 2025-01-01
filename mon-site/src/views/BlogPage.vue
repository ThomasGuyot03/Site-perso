<template>
    <div class="blog-page">
      <div class="content-container">
        <h1 class="animated-title">Blog</h1>
        <p class="intro-text">
          Bienvenue sur mon blog ! Ici, je partagerai des articles sur le développement web, le design, 
          et d'autres sujets qui me passionnent. Restez connectés pour plus de contenu à venir.
        </p>
        <div class="blog-grid">
          <!-- Espaces réservés pour les articles -->
          <div 
            v-for="n in 6" 
            :key="'placeholder-' + n" 
            class="blog-card"
          >
            <div class="placeholder-image"></div>
            <h2 class="placeholder-title">Article {{ n }}</h2>
            <p class="placeholder-text">Un aperçu de cet article sera bientôt disponible.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlogPage',
  };
  </script>
  
  <style scoped>
  /* Conteneur principal */
  .blog-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: calc(100vh - 100px); /* Ajuste selon la hauteur de la navbar et du footer */
    padding: 20px;
    color: #fff;
    background-color: #2b2b2b;
  }
  
  /* Conteneur de contenu */
  .content-container {
    text-align: center;
    max-width: 800px;
    width: 100%;
  }
  
  /* Titre animé */
  .animated-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    text-transform: uppercase;
    animation: fadeInMove 1s ease-in-out;
    color: #ffffff;
  }
  
  /* Texte d'introduction */
  .intro-text {
    font-size: 1.2rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 30px;
  }
  
  /* Grille des articles */
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    width: 100%;
  }
  
  /* Carte d'article */
  .blog-card {
    background-color: #333;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    text-align: left;
    animation: fadeIn 1s ease-in-out;
  }
  
  /* Image fictive */
  .placeholder-image {
    width: 100%;
    height: 150px;
    background-color: #444;
    border-radius: 8px;
    margin-bottom: 15px;
  }
  
  /* Titre fictif */
  .placeholder-title {
    font-size: 1.4rem;
    color: #fff;
    margin-bottom: 10px;
  }
  
  /* Texte fictif */
  .placeholder-text {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
  }
  
  /* Animation */
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
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  </style>
  