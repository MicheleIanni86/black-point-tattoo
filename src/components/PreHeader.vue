<script>
// import ... from './components/...';
export default {
  data() {
    return {
      cards: [
        { name: "home", label: "Home", img: "src/assets/img/Card01.png" },
        { name: "artist", label: "Artista", img: "src/assets/img/Card02.png" },
        { name: "gallery", label: "Galleria", img: "src/assets/img/Card03.png" },
        { name: "contact", label: "Contatti", img: "src/assets/img/Card04.png" },
      ],
    };
  },
  components: {},
  props: {},
  methods: {
    changeToScreen(screenName) {
      this.$emit("change-screen", screenName);
    },
  },
};
</script>
<template>
  <div class="wrapper">
    <div><img src="../assets/img/logo.png" height="40px" alt=""></div>

    <div class="d-flex gap-5 fs-3">
      <div v-for="card in cards" :key="card.name" @click="changeToScreen(card.name)">
        {{ card.label }}

      </div>

    </div>

    <div><img src="../assets/img/LogoWhatsapp.png" height="40px" alt=""></div>
  </div>
</template>
<style scoped>
@import "../style/variables.css";

.wrapper {
  height: var(--header-height);
  display: flex;
  justify-content: space-around;
  align-items: center;

  h2 {
    font-size: 33px;
  }
}
</style>
