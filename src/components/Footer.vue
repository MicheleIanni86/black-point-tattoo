<script>
// import ... from './components/...';
export default {
  data() {
    return {};
  },
  components: {},
  props: {},
  methods: {},
};
</script>
<template>
  <div class="wrapper">
    <div class="agency-container">
      <div class="text-container">&copy; MAM Agency</div>
      <div class="img-container">
        <img src="/src/assets/logos/Logo_Mam.png" alt="MAM" />
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../style/variables.css";
.wrapper {
  min-height: var(--footer-height);
  display: flex;
  align-items: center;
  h2 {
    font-size: 33px;
  }
  .agency-container {
    display: flex;
    align-items: center;
    padding: 0 25px;
  }
  .img-container {
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    margin: 0 20px;

    img {
      width: 100%;
      background-size: contain;
    }
  }
}
</style>
