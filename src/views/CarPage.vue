<template>
  <div class="car-page-container">
    <template v-if="carsToShow">
      <CarFilter :maxSpeed="maxSpeed" @setFilter="setFilter" />
      <CarList @removeCar="removeCar" :cars="carsToShow" />
    </template>
  </div>
</template>

<script>
import CarList from "../components/CarList";
import CarFilter from "../components/CarFilter";
import CarService from "../services/CarService.js";
import EventBus, { MSG_EVENT } from "../services/EventBusService.js";

export default {
  name: "CarPage",
  data() {
    return {
      cars: null,
      filterBy: null
    };
  },
  async created() {
    const cars = await CarService.get();
    this.cars = cars;
  },
  computed: {
    carsToShow() {
      if (!this.filterBy) return this.cars;
      if (!this.filterBy.txt.length) delete this.filterBy.txt;
      return this.cars.filter(car => {
        return (
          (car.maxSpeed > 0 && car.maxSpeed <= this.filterBy.maxSpeed) ||
          car.vendor.includes(this.filterBy.txt) ||
          car.name.includes(this.filterBy.txt)
        );
      });
    },
    maxSpeed() {
      return Math.max(...this.cars.map(car => car.maxSpeed));
    }
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    async removeCar({ id: carId, name }) {
      EventBus.$emit(MSG_EVENT, {
        txt: `Removing ${name}`,
        type: "info"
      });
      await CarService.remove(carId);
      setTimeout(() => {
        EventBus.$emit(MSG_EVENT, {
          txt: `Removed ${name}`,
          type: "success"
        });
        this.cars = this.cars.filter(car => car._id !== carId)
      }, 3000);
    }
  },
  components: {
    CarList,
    CarFilter
  }
};
</script>

<style>
</style>