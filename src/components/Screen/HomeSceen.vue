<script>
// import ... from './components/...';
export default {
  data() {
    return {
      isMobile: false,
    };
  },

  created() {
    this.checkScreenWidth();
    window.addEventListener("resize", this.checkScreenWidth);
  },
  beforeDestroy() {
    window.addEventListener("resize", this.checkScreenWidth);

  },
  components: {},
  props: {},
  methods: {
    checkScreenWidth() {
      this.isMobile = window.innerWidth < 576;
    }
  },
};
</script>
<template>
  <div class="wrapper d-flex">
    <img v-if="!isMobile" src="../../assets/img/SfondoDesktop.jpeg" alt="" class="imgMain">
    <img v-if="!isMobile" src="../../assets/img/MascheraLogoDesktop.png" alt="" class="maskMain">
    <video v-if="isMobile" class="video" src="../../assets/video/reel black point .mov" autoplay loop muted></video>
    <img v-if="isMobile" src="../../assets/img/MascheraLogoPhone.png" alt="" class="maskMain">
    <img v-if="isMobile" src="../../assets/img/ArrowDown.png" alt="" class="arrowScroll">
  </div>


</template>
<style scoped>
.wrapper {
  height: 100dvh;
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

  .video {
    width: 100%;

    object-fit: cover;
    /* filter: grayscale(60%); */
  }

  .arrowScroll {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 44px;
    animation: pulse 0.8s infinite;

  }


}

@keyframes pulse {
  0% {
    transform: translateX(-50%) scale(1);

    /* Dimensione iniziale */
  }

  50% {
    transform: translateX(-50%) scale(1.4);
    /* Ingrandisce leggermente l'immagine */
  }

  100% {
    transform: translateX(-50%) scale(1);
    /* Torna alla dimensione originale */
  }
}


@media (max-width: 480px) {
  .wrapper {
    min-height: 500px;
  }
}
</style>
