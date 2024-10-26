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
    <h2>header</h2>
  </div>
</template>
<style scoped>
@import "../style/variables.css";
.wrapper {
  height: var(--header-height);
  h2 {
    font-size: 33px;
  }
}
</style>
