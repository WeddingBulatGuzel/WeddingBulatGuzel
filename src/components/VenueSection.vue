<template>
  <section class="section2">
    <div class="decor decor-top-right"></div>
    <div id="location"></div>

    <p class="intro-text">
      Дорогие родные и близкие!<br />
      С огромной радостью приглашаем вас<br />
      на самое главное событие<br />
      в нашей жизни – нашу свадьбу!<br />
      Мы будем ещё счастливей, если вы<br />
      разделите с нами этот чудесный день!
    </p>

    <h2 class="section-title">Место проведения</h2>

    <div class="venue-photo">
      <img :src="venuePhoto" alt="Место проведения" />
    </div>

    <p class="venue-address">
      село Ургуново<br />
      улица Центральная, 101
    </p>

    <div id="map" class="map"></div>

    <a
      :href="mapsUrl"
      target="_blank"
      class="map-button"
    >
      Построить маршрут
    </a>

    <div class="decor decor-bottom-left"></div>
  </section>
</template>

<script>
import venuePhoto from '@/assets/images/place.jpg'

export default {
  name: 'VenueSection',
  data() {
    return {
      venuePhoto,
      map: null,
      coords: [54.410377, 59.396711], // координаты села Ургуново
      mapsUrl: `https://yandex.ru/maps/?rtext=~54.410377,59.396711`
    }
  },
  mounted() {
    // Загружаем API Яндекс Карт
    const script = document.createElement('script')
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=d06f726a-8675-4ebd-84e5-0e884a771ea9&lang=ru_RU'
    script.async = true
    script.onload = this.initMap
    document.head.appendChild(script)
  },
  methods: {
    initMap() {
      // Инициализируем карту после загрузки API
      ymaps.ready(() => {
        this.map = new ymaps.Map('map', {
          center: this.coords,
          zoom: 15,
          controls: ['zoomControl', 'fullscreenControl']
        })

        // Создаем метку с красным балуном (пока нет)
        

        this.map.geoObjects.add(placemark)
        placemark.balloon.open()
      })
    }
  },
  beforeUnmount() {
    // Уничтожаем карту при размонтировании компонента
    if (this.map) {
      this.map.destroy()
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

.intro-text {
  text-align: center;
  font-size: clamp(18px, 4vw, 28px);
  line-height: 1.5;
  margin-bottom: 3rem;
  color: #782828;
  font-family: 'TextFont', sans-serif;
}

.venue-address {
  text-align: center;
  font-size: clamp(18px, 4vw, 28px);
  line-height: 1.5;
  margin: 2rem 0;
  color: #782828;
  font-family: 'TextFont', sans-serif;
}

#location {
  position: relative;
  margin-top: 60px; /* Add margin to account for fixed navigation */
}

.map {
  width: 100%;
  height: 400px;
  max-width: 800px;
  margin: 0 auto 2rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.map-button {
  margin-top: 1rem;
  background-color: #4CAF50;
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s;
}

.map-button:hover {
  background-color: #45a049;
}

.venue-photo {
  max-width: 1000px;
  margin: 0 auto 2rem;
  padding: 0 1rem;
}

.venue-photo img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  transition: transform 0.3s ease;
}

.venue-photo img:hover {
  transform: scale(1.02);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .venue-photo {
    max-width: 90%;
  }
}

@media (max-width: 480px) {
  .venue-photo {
    max-width: 95%;
  }
}

/* Остальные стили импортированы из assets/style.css */
</style> 