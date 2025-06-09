<template>
  <nav class="wedding-nav">
    <div class="nav-container">
      <a href="#home" class="nav-item">Главная</a>
      <a href="#location" class="nav-item">Место</a>
      <a href="#wishes" class="nav-item">Пожелания</a>
      <a href="#schedule" class="nav-item">Расписание</a>
      <a href="#rsvp" class="nav-item">Подтверждение</a>
      <div class="nav-decoration left"></div>
      <div class="nav-decoration right"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationMenu'
}
</script>

<style scoped>
.wedding-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  padding: 15px 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.nav-item {
  color: #9e7b7b;
  text-decoration: none;
  padding: 8px 15px;
  margin: 0 8px;
  font-size: 1.1em;
  transition: all 0.3s ease;
  position: relative;
  font-family: 'TextFont', sans-serif;
}

.nav-item:hover {
  color: #6d4c4c;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 1px;
  background: #9e7b7b;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-item:hover::after {
  width: 80%;
}

.nav-decoration {
  position: absolute;
  width: 30px;
  height: 30px;
  background-image: url('@/assets/floral-decoration.svg');
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
}

.nav-decoration.left {
  left: 10px;
  transform: rotate(-90deg);
}

.nav-decoration.right {
  right: 10px;
  transform: rotate(90deg);
}

@media (max-width: 768px) {
  .nav-item {
    padding: 8px 10px;
    margin: 0 4px;
    font-size: 0.9em;
  }
  
  .nav-decoration {
    display: none;
  }
}

@media (max-width: 480px) {
  .nav-container {
    flex-wrap: wrap;
  }
  
  .nav-item {
    padding: 6px 8px;
    margin: 2px;
    font-size: 0.85em;
  }
}
</style> 