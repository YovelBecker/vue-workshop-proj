<template>
  <div class="header-container shadow">
    <span>
      <img src="../assets/cars_r_us.svg" />
      <h1 class="logo">Cars R Us</h1>
    </span>
    <NavBar />
  </div>
</template>

<script>
import NavBar from "./NavBar";
export default {
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Varela+Round&display=swap");

.header-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding:15px 0;
  span {
    display: flex;
    padding-left:10px;
    border-top: 1px solid #000;
    border-left: 1px solid #000;
  }
  .logo {
    font-family: "Varela Round", sans-serif;
    letter-spacing: 8px;
  }
  img {
    max-width: 80px;
    margin-right:10px;
  }
}
</style>