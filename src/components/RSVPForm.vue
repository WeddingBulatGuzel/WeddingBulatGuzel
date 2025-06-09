<template>
  <section class="section5">
    <h2 class="section-title">Подтверждение присутствия</h2>

    <p class="confirmation-text">
      Мы с нетерпением ждём встречи и хотим, чтобы всем было комфортно и
      радостно. Поделитесь с нами, сможете ли вы быть с нами в этот день — это
      правда важно для подготовки!
    </p>

    <form @submit.prevent="submitForm" class="rsvp-form">
      <div class="form-group">
        <label for="name">Ваше имя*</label>
        <input 
          type="text" 
          id="name" 
          v-model="form.name"
          :class="{ 'error': errors.name }"
          required
        />
        <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <label for="attendance">Присутствие*</label>
        <select 
          id="attendance" 
          v-model="form.attendance"
          :class="{ 'error': errors.attendance }"
          required
        >
          <option value="">Выберите ответ</option>
          <option value="yes">Да, я приду</option>
          <option value="no">К сожалению, не смогу</option>
        </select>
        <span class="error-message" v-if="errors.attendance">{{ errors.attendance }}</span>
      </div>

      <div class="form-group">
        <label for="guests">Количество гостей</label>
        <input 
          type="number" 
          id="guests" 
          v-model="form.guests"
          min="0"
          :disabled="form.attendance !== 'yes'"
        />
      </div>

      <div class="form-group">
        <label for="wishes">Пожелания или комментарии</label>
        <textarea 
          id="wishes" 
          v-model="form.wishes"
          rows="4"
        ></textarea>
      </div>

      <button type="submit" class="submit-button" :disabled="isSubmitting">
        {{ isSubmitting ? 'Отправка...' : 'Подтвердить' }}
      </button>
    </form>

    <div v-if="submitStatus" :class="['submit-status', submitStatus.type]">
      {{ submitStatus.message }}
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RSVPForm',
  data() {
    return {
      form: {
        name: '',
        attendance: '',
        guests: 0,
        wishes: ''
      },
      errors: {},
      isSubmitting: false,
      submitStatus: null
    }
  },
  methods: {
    validateForm() {
      this.errors = {};
      
      if (!this.form.name.trim()) {
        this.errors.name = 'Пожалуйста, введите ваше имя';
      }
      
      if (!this.form.attendance) {
        this.errors.attendance = 'Пожалуйста, выберите ваш ответ';
      }
      
      return Object.keys(this.errors).length === 0;
    },
    
    async submitForm() {
      if (!this.validateForm()) return;
      
      this.isSubmitting = true;
      this.submitStatus = null;
      
      try {
        const response = await axios.post('/submit.php', this.form);
        this.submitStatus = {
          type: 'success',
          message: 'Спасибо! Ваш ответ успешно отправлен.'
        };
        this.resetForm();
      } catch (error) {
        this.submitStatus = {
          type: 'error',
          message: 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже.'
        };
      } finally {
        this.isSubmitting = false;
      }
    },
    
    resetForm() {
      this.form = {
        name: '',
        attendance: '',
        guests: 0,
        wishes: ''
      };
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

.rsvp-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.error {
  border-color: #ff4444 !important;
}

.error-message {
  color: #ff4444;
  font-size: 0.9em;
  margin-top: 5px;
}

.submit-button {
  width: 100%;
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.submit-status {
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
  text-align: center;
}

.submit-status.success {
  background-color: #dff0d8;
  color: #3c763d;
}

.submit-status.error {
  background-color: #f2dede;
  color: #a94442;
}
</style> 