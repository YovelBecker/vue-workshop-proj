<template>
  <div v-if="car" class="car-details-container shadow">
    <h1>{{car.name}}</h1>
    <span>
      <span class="car-content">
        <h1>{{car.vendor}}</h1>
        <router-link :to="`/car/edit/${car._id}`">
          <button class="btn shadow">Edit Car</button>
        </router-link>
        <p>{{car.description}}</p>
      </span>
      <img :src="car.img" :alt="car.vendor" />
    </span>
  </div>
</template>

<script>
import CarService from "../services/CarService";
export default {
  
  data() {
    return {
      car: null
    };
  },
  async created() {
    const carId = +this.$route.params.id;
    const car = await CarService.getById(carId);
    this.car = car;
  }
};
</script>

<style lang="scss">
.car-details-container {
  margin: 40px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  span {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    text-align: center;
    img {
      max-width: 400px;
      margin: 0 auto;
    }
    .car-content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 20px;
    }
  }
}
</style>