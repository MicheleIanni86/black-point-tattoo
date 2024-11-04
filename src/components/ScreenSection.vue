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
  <div class="screen-section">
    <div class="container">
      <div class="row">
        <div v-for="card in cards" :key="card.name" class="dg col-xs-12 col-md-5 col-xl-3 my-3"
          @click="changeToScreen(card.name)">
          <div class="m-auto">
            <div class="labelCard">{{ card.label }}</div>
            <div><img :src="card.img" alt="" width="100%"></div>
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

    .labelCard {
      font-size: medium;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
  }

  .left {
    flex-grow: 1;
  }
}
</style>
