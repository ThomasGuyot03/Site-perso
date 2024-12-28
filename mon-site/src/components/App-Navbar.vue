<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- Menu de navigation -->
      <ul class="nav-links">
        <li><a href="#" class="nav-item active">Home</a></li>
        <li><a href="#" class="nav-item">About</a></li>
        <li><a href="#" class="nav-item">Works</a></li>
        <li><a href="#" class="nav-item">Blogs</a></li>
        <li><a href="#" class="nav-item">Contact</a></li>
      </ul>

      <!-- Bouton principal -->
      <a href="#" class="cta-button">Let’s Work Together</a>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  position: absolute; 
  top: 2%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  width: 40%; 
  background-color: #353535;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 20px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 10; 
}


.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

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
</style>
