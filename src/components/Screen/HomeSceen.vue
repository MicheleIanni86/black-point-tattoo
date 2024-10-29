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
    <img src="../../assets/img/006.jpeg" alt="" class="internimg">
    <div class="mask">

      <svg width="100%" height="100%" viewBox="0 0 500 700" preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg">
        <!-- Bordo esterno -->
        <rect x="20" y="20" width="460" height="660" fill="none" stroke="#b5853f" stroke-width="5" />

        <!-- Motivi ornamentali -->
        <path d="M40,40 C40,100 180,100 180,40 S80,20 40,40" stroke="#b5853f" fill="none" stroke-width="4" />
        <path d="M460,40 C460,100 320,100 320,40 S420,20 460,40" stroke="#b5853f" fill="none" stroke-width="4" />

        <!-- Ripetere simili decorazioni per gli altri angoli -->
      </svg>
    </div>

  </div>
</template>
<style scoped>
.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  /* Assicurati che il contenuto resti sopra */
  pointer-events: none;
  /* Rende la cornice non interattiva */
}

svg {
  width: 100%;
  height: 100%;
}

.maskimg {
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
  position: absolute;
  left: 0;
  /* z-index: 1; */
  /* object-fit: contain; */

}

.internimg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wrapper {
  position: relative;
  min-height: 900px;
  flex-grow: 1;
}

@media (max-width: 480px) {
  .wrapper {
    min-height: 500px;
  }
}
</style>
