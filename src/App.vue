<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import HomeScreen from "./components/Screen/HomeSceen.vue";
import ArtistScreen from "./components/Screen/ArtistsScreen.vue";
import GalleryScreen from "./components/Screen/GalleryScreeen.vue";
import ContactScreen from "./components/Screen/ContactScreen.vue";
import Footer from "./components/Footer.vue";
import PreHeader from "./components/PreHeader.vue";
import ScreenSection from "./components/ScreenSection.vue";

const screen = ref("home");
const showPreHeader = ref(true); // Variabile per la visibilità di PreHeader

function checkScreenWidth() {
  showPreHeader.value = window.innerWidth > 576; // Mostra PreHeader solo se la larghezza è maggiore di 576px
}

onMounted(() => {
  checkScreenWidth(); // Controlla la larghezza iniziale dello schermo
  window.addEventListener('resize', checkScreenWidth); // Aggiungi un listener per il resize
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenWidth); // Rimuovi il listener al dismount
});

function changeScreen(newScreen) {
  screen.value = newScreen;
}



</script>

<template>
  <div class="main-container">
    <PreHeader v-if="showPreHeader" class="dg" @change-screen="changeScreen" />
    <component :is="screen === 'home'
      ? HomeScreen
      : screen === 'artist'
        ? ArtistScreen
        : screen === 'gallery'
          ? GalleryScreen
          : ContactScreen
      " class="dg" />
    <ScreenSection class="dg" @change-screen="changeScreen" />
    <Footer class="dg" />
  </div>
</template>

<style>
/*debug  */
/* .dg {
  border: 1px solid red;
} */

.main-container {
  box-sizing: border-box;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
  overflow: auto;
}
</style>
