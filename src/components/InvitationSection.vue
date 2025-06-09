<template>
  <section class="section1">
    <div class="decor decor-top-left"></div>
    <div class="decor decor-top-right"></div>

    <div class="rings"></div>

    <p class="invitation-text">Рады пригласить вас на нашу свадьбу!</p>
    <p class="date-time">02 августа 2025 года в 15:30</p>

    <div class="names">
      <span class="name">Булат</span>
      <span class="amp">&amp;</span>
      <span class="name">Гузель</span>
    </div>
  
    <div class="decor decor-middle-right"></div>

    <div class="photo-frame">
      <img :src="headPhoto" alt="Молодожёны" />
    </div>

    <div class="decor decor-bottom-left"></div>
  </section>
</template>

<script>
import headPhoto from '@/assets/images/HeadPhoto.jpg'
import rings from '@/assets/images/rings.png'

export default {
  name: 'InvitationSection',
  data() {
    return {
      headPhoto,
      rings
    }
  }
}
</script>

<style scoped>
/* Стили будут импортированы из assets/style.css */
.rings {
  background-image: url('@/assets/images/rings.png');
}
</style> 