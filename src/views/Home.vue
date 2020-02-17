<template>
  <div class="home-container">
    <span>
      <h1>Hello And Welcome</h1>
      <h4>Our cars might be faster than you know...</h4>
    </span>
    <img src="../assets/fast_car.svg" />
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss">
.home-container {
  display: flex;
  align-items: center;
  padding: 80px 20px;
  line-height:2em;
  span {
    position: relative;
    bottom: 80px;
  }
  img {
    max-width: 700px;
  }
}
</style>