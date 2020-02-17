<template>
  <div class="car-list-container">
    <router-link :to="`/car/${car._id}`" v-for="car in cars" :key="car._id">
      <CarPreview @removeCar="onRemoveCar" :car="car" />
    </router-link>
  </div>
</template>

<script>
import CarPreview from "./CarPreview";
export default {
  props: {
    cars: {
      required: true,
      type: Array
    }
  },
  methods: {
    onRemoveCar(payload) {
      this.$emit("removeCar", payload);
    }
  },
  components: {
    CarPreview
  }
};
</script>

<style lang="scss">
.car-list-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    color: unset;
  }
}
</style>