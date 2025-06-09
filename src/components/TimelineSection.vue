<template>
  <section class="section4">
    <div class="decor decor-top-left"></div>

    <h2 class="section-title">Расписание</h2>

    <div class="timeline">
      <div class="event">
        <span class="time">13:30</span>
        <div class="details">
          <h3>Выкуп невесты</h3>
          <p>
            С весёлого старта начинается день! Жениху предстоит пройти
            несколько испытаний, чтобы доказать свою любовь. Обещаем: будет
            весело и с душой!
          </p>
        </div>
      </div>

      <div class="event">
        <span class="time">15:30</span>
        <div class="details">
          <h3>Сбор гостей</h3>
          <p>
            Время встреч и улыбок! Перекинуться парой слов с друзьями, сделать
            пару фото и насладиться лёгкими закусками – отличный старт перед
            церемонией.
          </p>
        </div>
      </div>

      <div class="event">
        <span class="time">16:00</span>
        <div class="details">
          <h3>Выездная регистрация</h3>
          <p>
            Тот самый трепетный момент! Слова любви, клятвы и счастливые глаза –
            всё это создаст магию, которую мы запомним навсегда.
          </p>
        </div>
      </div>

      <div class="event">
        <span class="time">17:00</span>
        <div class="details">
          <h3>Начало банкета</h3>
          <p>
            Готовьтесь поднимать бокалы, наслаждаться вкусной едой и танцевать
            до упаду! Веселье официально объявляется открытым!
          </p>
        </div>
      </div>

      <div class="event">
        <span class="time">23:00</span>
        <div class="details">
          <h3>Заключение</h3>
          <p>
            Пора обниматься на прощание, обмениваться тёплыми словами и
            загадывать желания. Спасибо, что были с нами в этот особенный день!
          </p>
        </div>
      </div>
    </div>

    <div class="decor decor-bottom-right"></div>
  </section>
</template>

<script>
export default {
  name: 'TimelineSection'
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

.timeline {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.event {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
}

.event:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 3.5rem;
  top: 3rem;
  bottom: -3rem;
  width: 2px;
  background-color: #4caf5000;
}

.time {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4caf5000;
  min-width: 5rem;
  text-align: right;
}

.details {
  flex: 1;
}

.details h3 {
  margin: 0 0 0.5rem;
  color: #333;
}

.details p {
  margin: 0;
  color: #666;
}

@media (max-width: 768px) {
  .event {
    flex-direction: column;
    gap: 1rem;
  }

  .time {
    text-align: left;
  }

  .event:not(:last-child)::after {
    left: 1rem;
    top: 4rem;
  }
}
</style> 