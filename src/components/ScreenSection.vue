<script>
// import ... from './components/...';
export default {
  data() {
    return {};
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
  <div class="screen-section">
    <div class="container">
      <div class="row">
        <div class="dg col-xs-12 col-md-5 col-xl-3 my-3">
          <div class="card m-auto" @click="changeToScreen('home')">Home</div>
        </div>
        <div class="dg col-xs-12 col-md-5 col-xl-3 my-3">
          <div class="card m-auto" @click="changeToScreen('artist')">
            Artist
          </div>
        </div>
        <div class="dg col-xs-12 col-md-5 col-xl-3 my-3">
          <div class="card m-auto" @click="changeToScreen('gallery')">
            Gallery
          </div>
        </div>
        <div class="dg col-xs-12 col-md-5 col-xl-3 my-3">
          <div class="card m-auto" @click="changeToScreen('about')">
            About Us
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/*debug  */
.dg {
  border: 1px solid red;
}
.screen-section {
  display: flex;
  .container {
    .row {
      padding: 20px 50px;
      justify-content: center;
    }
    .card {
      height: 240px;
      aspect-ratio: 1;
      background-color: black;
    }
  }
  .left {
    flex-grow: 1;
  }
}
</style>
