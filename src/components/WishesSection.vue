<template>
  <section class="section3">
    <div class="decor decor-top-left"></div>

    <h2 class="section-title">Пожелания для гостей</h2>

    <div class="wishes">
      <div class="wish">
        <span class="number">1</span>
        <p>
          Пожалуйста, не дарите нам<br />
          живые цветы, они прекрасны,<br />
          но недолговечны.
        </p>
      </div>
      <div class="wish">
        <span class="number">2</span>
        <p>
          Если собираетесь подарить нам<br />
          ценный и нужный подарок –<br />
          поместите его в конверт.
        </p>
      </div>
      <div class="wish">
        <span class="number">3</span>
        <p>
          Мы будем бесконечно<br />
          благодарны, если вы<br />
          разделите с нами счастливые<br />
          моменты, будничные<br />
          проблемы и дела подождут!
        </p>
      </div>
    </div>

    <div class="photo-gallery">
      <div class="photo-with-arrows">
        <div class="arrow left-arrow" @click="previousPhoto">&#10094;</div>
        <div class="photo-frame" @click="showLightbox">
          <img :src="currentPhoto" alt="Молодожёны" />
        </div>
        <div class="arrow right-arrow" @click="nextPhoto">&#10095;</div>
      </div>
    </div>

    <vue-easy-lightbox
      :visible="isLightboxVisible"
      :imgs="photos"
      :index="currentIndex"
      @hide="hideLightbox"
    />

    <div class="decor decor-bottom-right"></div>
  </section>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
import galery1 from '@/assets/images/galery1.jpg'
import galery2 from '@/assets/images/galery2.jpg'
import galery3 from '@/assets/images/galery3.jpg'

export default {
  name: 'WishesSection',
  components: {
    VueEasyLightbox
  },
  data() {
    return {
      photos: [
        galery1,
        galery2,
        galery3
      ],
      currentIndex: 0,
      isLightboxVisible: false
    }
  },
  computed: {
    currentPhoto() {
      return this.photos[this.currentIndex]
    }
  },
  methods: {
    previousPhoto() {
      this.currentIndex = (this.currentIndex - 1 + this.photos.length) % this.photos.length
    },
    nextPhoto() {
      this.currentIndex = (this.currentIndex + 1) % this.photos.length
    },
    showLightbox() {
      this.isLightboxVisible = true
    },
    hideLightbox() {
      this.isLightboxVisible = false
    }
  }
}
</script>

<style scoped>
.section-title {
  text-align: center;
  font-size: clamp(23px, 10vw, 70px);
  font-family: 'HeadFont', sans-serif;
  margin-bottom: 2rem;
  color: #782828;
  font-weight: normal;
}

.photo-gallery {
  margin: 2rem 0;
}

.photo-with-arrows {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.arrow {
  cursor: pointer;
  font-size: 2rem;
  padding: 1rem;
  user-select: none;
}

.arrow:hover {
  opacity: 0.7;
}

/* Остальные стили импортированы из assets/style.css */
</style> 