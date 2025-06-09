<template>
  <div class="app">
    <NavigationMenu />
    <FlowerDecorations />
    <InvitationSection id="home" />
    <VenueSection id="location" />
    <WishesSection id="wishes" />
    <TimelineSection id="schedule" />
    <RSVPForm id="rsvp" />
  </div>
</template>

<script>
import NavigationMenu from './components/NavigationMenu.vue';
import InvitationSection from './components/InvitationSection.vue';
import VenueSection from './components/VenueSection.vue';
import WishesSection from './components/WishesSection.vue';
import TimelineSection from './components/TimelineSection.vue';
import RSVPForm from './components/RSVPForm.vue';
import FlowerDecorations from './components/FlowerDecorations.vue';

export default {
  name: 'App',
  components: {
    NavigationMenu,
    FlowerDecorations,
    InvitationSection,
    VenueSection,
    WishesSection,
    TimelineSection,
    RSVPForm
  }
}
</script>

<style>
/* Global styles will be imported from assets/style.css */
.app {
  padding-top: 60px; /* Add space for fixed navigation */
}

html {
  scroll-behavior: smooth; /* Enable smooth scrolling */
  scroll-padding-top: 60px; /* Add padding for fixed header */
}

/* Add padding to sections for better spacing with fixed nav */
section {
  scroll-margin-top: 60px; /* This ensures the section starts at the right position when navigating */
  padding-top: 2rem;
}
</style> 