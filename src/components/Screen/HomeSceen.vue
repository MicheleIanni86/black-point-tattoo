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
  <div class="wrapper d-flex">
    <img src="../../assets/img/SfondoDesktop.jpeg" alt="" class="imgMain">
    <img src="../../assets/img/MascheraLogoDesktop.png" alt="" class="maskMain">

  </div>
</template>
<style scoped>
.wrapper {
  height: 75dvh;
  flex-grow: 1;
  position: relative;

  .imgMain {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  .maskMain {
    position: absolute;
    max-height: 75dvh;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

}

@media (max-width: 480px) {
  .wrapper {
    min-height: 500px;
  }
}
</style>
