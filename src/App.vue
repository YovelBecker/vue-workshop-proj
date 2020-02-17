<template>
  <div class="app-container">
    <Header />
    <main>
      <router-view></router-view>
    </main>
    <Footer />
    <Msg />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Msg from "./components/Msg.vue";

export default {
  components: {
    Header,
    Footer,
    Msg
  }
};
</script>

<style lang="scss">
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  padding: 0 20px;
  margin: 0 auto;
  flex-grow: 1;
}
</style>