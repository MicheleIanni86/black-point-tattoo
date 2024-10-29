<script>
// import ... from './components/...';
export default {
  data() {
    return {
      cards: [
        { name: "home", label: "Home", img: "Foto Home" },
        { name: "artist", label: "Artist", img: "Foto Home" },
        { name: "gallery", label: "Gallery", img: "Foto Home" },
        { name: "contact", label: "Contact", img: "Foto Home" },
      ],
    };
  },
  components: {},
  props: {},
  methods: {
    changeToScreen(screenName) {
      this.$emit("change-screen", screenName);

      // const clickedCard = this.cards.find((card) => card.name === screenName);
      // if (clickedCard) {
      //   this.cards = this.cards.filter((card) => card.name !== screenName);
      //   this.cards.splice(1, 0, clickedCard);
      // }
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
          <div class="card m-auto">
            {{ card.label }}
            <div>{{ card.img }}</div>
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
