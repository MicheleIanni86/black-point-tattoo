<script setup>
import { ref } from "vue";
import HomeScreen from "./components/Screen/HomeSceen.vue";
import ArtistScreen from "./components/Screen/ArtistsScreen.vue";
import GalleryScreen from "./components/Screen/GalleryScreeen.vue";
import AboutScreen from "./components/Screen/AboutScreen.vue";
import Footer from "./components/Footer.vue";
import PreHeader from "./components/PreHeader.vue";
import ScreenSection from "./components/ScreenSection.vue";

const screen = ref("home");

function changeScreen(newScreen) {
  screen.value = newScreen;
}
</script>

<template>
  <div class="main-container">
    <PreHeader class="dg" />
    <component
      :is="
        screen === 'home'
          ? HomeScreen
          : screen === 'artist'
          ? ArtistScreen
          : screen === 'gallery'
          ? GalleryScreen
          : AboutScreen
      "
      class="dg"
    />
    <ScreenSection class="dg" @change-screen="changeScreen" />
    <Footer class="dg" />
  </div>
</template>

<style>
/*debug  */
.dg {
  border: 1px solid red;
}

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
