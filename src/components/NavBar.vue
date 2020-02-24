<template>
  <div class="navbar-container">
    <router-link is="a" to="/">home</router-link>
    <router-link to="/car">cars</router-link>
    <router-link to="/car/edit">Add Car</router-link>
    <router-link to="/messing">sandbox</router-link>
  </div>
</template>

<style lang="scss">
.navbar-container {
  text-transform: uppercase;
  a {
    text-align: center;
    text-decoration: none;
    color: rgb(48, 48, 48);
    margin: 0 20px;
    letter-spacing: 0.5rem;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>