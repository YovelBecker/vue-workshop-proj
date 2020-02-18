<template>
  <div class="car-page-container">
    <CarFilter
      :txt="filterBy.txt"
      :isHybrid="filterBy.isHybrid"
      :maxSpeed="filterBy.maxSpeed"
      @setFilter="setFilter"
    />
    <CarList v-if="carsToShow.length" @removeCar="removeCar" :cars="carsToShow" />
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
      cars: [],
      filterBy: {
        txt: "",
        maxSpeed: 0,
        isHybrid: false
      }
    };
  },
  async created() {
    this.loadCars();
  },
  computed: {
    carsToShow() {
      let { txt, isHybrid, maxSpeed } = this.filterBy;
      let filteredCars = [...this.cars];

      txt = txt.toLowerCase().trim();
      if (txt) {
        filteredCars = filteredCars.filter(car => {
          return (
            car.name &&
            txt ===
              car.name
                .toLowerCase()
                .trim()
                .includes(txt)
          );
        });
      }
      if (maxSpeed > 0) {
        // if 0 don't filter
        filteredCars = filteredCars.filter(car => {
          return filteredCars.maxSpeed < maxSpeed;
        });
      }
      filteredCars = filteredCars.filter(car => {
        // car.isHybrid is possibly not initialized
        return !!car.isHybrid === isHybrid;
      });
      return filteredCars;
    },
    maxSpeed() {
      return Math.max(...this.cars.map(car => car.maxSpeed));
    }
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    async loadCars() {
      const cars = await CarService.get(this.filterBy);
      console.log("cars", cars);

      this.cars = cars;
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
        this.cars = this.cars.filter(car => car._id !== carId);
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
.car-page-container {
  min-width: 960px;
}
</style>