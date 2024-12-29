<template>
    <div class="contact-page">
      <!-- Section Titre et Description -->
      <section class="hero-section">
        <h1>Contactez-Nous</h1>
        <p>Nous sommes là pour répondre à toutes vos questions. Remplissez le formulaire ci-dessous ou utilisez les options disponibles pour nous contacter directement.</p>
      </section>
  
      <!-- Section Formulaire -->
      <section class="form-section">
        <div class="form-container">
          <form @submit.prevent="handleFormSubmit">
            <div class="form-group">
              <label for="name">Nom :</label>
              <input id="name" v-model="name" type="text" placeholder="Votre nom" required />
            </div>
            <div class="form-group">
              <label for="email">Email :</label>
              <input id="email" v-model="email" type="email" placeholder="Votre email" required />
            </div>
            <div class="form-group">
              <label for="message">Message :</label>
              <textarea id="message" v-model="message" placeholder="Votre message..." required></textarea>
            </div>
            <button type="submit" class="submit-button">Envoyer</button>
          </form>
        </div>
      </section>
  
      <!-- Section Options -->
      <section class="options-section">
        <div class="cards-container">
          <!-- Carte Email -->
          <div class="card">
            <div class="icon">
              <i class="fas fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <button @click="sendEmail" class="option-button">Envoyer un Email</button>
          </div>
  
          <!-- Carte Téléphone -->
          <div class="card">
            <div class="icon">
              <i class="fas fa-phone-alt"></i>
            </div>
            <h3>Réserver un appel</h3>
            <button @click="bookCall" class="option-button">Booker un Call</button>
          </div>
  
          <!-- Carte LinkedIn -->
          <div class="card">
            <div class="icon">
              <i class="fab fa-linkedin"></i>
            </div>
            <h3>LinkedIn</h3>
            <button @click="goToLinkedIn" class="option-button">Accéder à LinkedIn</button>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const name = ref('');
  const email = ref('');
  const message = ref('');
  
  function handleFormSubmit() {
    if (name.value.trim() && email.value.trim() && message.value.trim()) {
      console.log('Formulaire soumis :', { name: name.value, email: email.value, message: message.value });
      alert('Merci pour votre message !');
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }
  
  function sendEmail() {
    window.location.href = 'mailto:example@example.com';
  }
  
  function bookCall() {
    window.open('https://calendly.com/', '_blank');
  }
  
  function goToLinkedIn() {
    window.open('https://www.linkedin.com/', '_blank');
  }
  </script>
  
  <style scoped>
  .navbar {
    margin-top: 20px;
  }
  
  /* Section Titre et Description */
  .hero-section {
    text-align: center;
    background-color: transparent;
    color: white;
    padding: 3rem 1rem 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .hero-section h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #ff6363;
  }
  
  .hero-section p {
    font-size: 1.2rem;
    margin: 0 auto;
    text-align: center;
    line-height: 1.5;
    max-width: 60%;
    width: 100%;
  }
  
  /* Section Formulaire */
  .form-section {
    padding: 2rem 1rem;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .form-container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    background-color: rgba(53, 53, 53, 0.9);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  textarea {
    height: 100px;
  }
  
  input:focus, textarea:focus {
    border-color: #ff6363;
    outline: none;
    box-shadow: 0 0 5px rgba(255, 99, 99, 0.5);
  }
  
  .submit-button {
    display: block;
    width: 100%;
    padding: 0.75rem;
    background-color: #ff6363;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-button:hover {
    background-color: #ff4343;
  }
  
  /* Section Options */
  .options-section {
    padding: 2rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 80%;
    margin: 0 auto;
  }
  
  .card {
    background: #1c1c1c;
    opacity: 70%;
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
  
  .icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2a2a2a;
    margin: 0 auto 20px;
    font-size: 2rem;
    color: #ff6363;
  }
  
  .card h3 {
    margin-bottom: 10px;
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
  }
  
  .option-button {
    padding: 0.5rem 1rem;
    background-color: #ff6363;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .option-button:hover {
    background-color: #ff4343;
  }
  
  /* Responsive Styles */
  @media screen and (max-width: 768px) {
    .cards-container {
      grid-template-columns: 1fr 1fr; /* Deux colonnes sur mobile */
    }
  
    .hero-section h1 {
      font-size: 2rem;
    }
  
    .hero-section p {
      font-size: 1rem;
      padding: 0 1rem;
    }
  
    .form-container {
      width: 90%;
    }
  }
  </style>
  
  