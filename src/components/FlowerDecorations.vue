<template>
  <div class="flower-decorations">
    <div v-for="n in 6" :key="n" :class="['flower', `flower-${n}`]">
      <img :src="`/src/assets/images/flowers/${n}.png`" :alt="`Flower decoration ${n}`">
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlowerDecorations'
}
</script>

<style scoped>
.flower-decorations {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.flower {
  position: absolute;
  opacity: 0.8;
  transition: all 0.5s ease;
}

.flower img {
  width: 100%;
  height: auto;
}

/* Positioning for each flower */
.flower-1 {
  top: 0;
  left: 0;
  width: 300px;
  transform: rotate(-15deg);
  animation: float 6s ease-in-out infinite;
}

.flower-2 {
  top: 5%;
  right: 0;
  width: 350px;
  transform: rotate(25deg);
  animation: float 7s ease-in-out infinite;
}

.flower-3 {
  bottom: 0;
  left: 0;
  width: 320px;
  transform: rotate(-10deg);
  animation: float 5s ease-in-out infinite;
}

.flower-4 {
  top: 50%;
  right: -50px;
  width: 280px;
  transform: rotate(15deg);
  animation: float 8s ease-in-out infinite;
}

.flower-5 {
  bottom: 0;
  right: 0;
  width: 340px;
  transform: rotate(-20deg);
  animation: float 6.5s ease-in-out infinite;
}

.flower-6 {
  top: 40%;
  left: -30px;
  width: 290px;
  transform: rotate(30deg);
  animation: float 7.5s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(var(--rotation));
  }
  50% {
    transform: translateY(-20px) rotate(var(--rotation));
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .flower img {
    width: 80%;
  }
  
  .flower-1, .flower-2, .flower-3, .flower-4, .flower-5, .flower-6 {
    width: 200px;
  }
}

@media (max-width: 480px) {
  .flower img {
    width: 60%;
  }
  
  .flower-1, .flower-2, .flower-3, .flower-4, .flower-5, .flower-6 {
    width: 150px;
  }
}
</style> 