<template>
  <div class="car-edit-container shadow">
    <h1>
      Edit
      <template v-if="car.name.length">{{car.name}}</template>
      <template v-else>your car</template>
    </h1>
    <label class="field">
      Name:
      <input v-model="car.name" type="text" placeholder="My Car" name="carName" />
    </label>
    <label class="field">
      Vendor:
      <input v-model="car.vendor" type="text" placeholder="Looxoos" name="carVendor" />
    </label>
    <label class="field">
      Image Url:
      <input v-model="car.img" type="text" placeholder="Enter A Valid Url" name="carImg" />
    </label>
    <label class="field">
      Max Speed:
      <input v-model="car.maxSpeed" type="number" name="carMaxSpeed" />
    </label>
    <label class="field">
      Hybrid:
      <span>
        <input v-model="car.isHybrid" type="checkbox" name="carHybrid" />
      </span>
    </label>
    <div class="control-btns field">
      <button class="btn">Reset</button>
      <button @click="saveCar" class="btn">Save</button>
    </div>
  </div>
</template>

<script>
import CarService from "../services/CarService";
import EventBus, { MSG_EVENT } from "../services/EventBusService.js";

export default {
  data() {
    return {
      car: {
        name: "",
        vendor: "",
        description: "",
        img: "",
        maxSpeed: 0,
        isHybrid: false
      }
    };
  },
  async created() {
    const id = this.$route.params.id;
    if (id) {
      const car = await CarService.getById(id);
      this.car = car;
    }
  },
  methods: {
    async saveCar() {
      this.car.maxSpeed = +this.car.maxSpeed;
      await CarService.save(this.car);
      EventBus.$emit(MSG_EVENT, {
        txt: `Saved ${this.car.name}`,
        type: "success"
      });
    }
  }
};
</script>

<style lang="scss">
.car-edit-container {
  margin: 40px;
  min-height: 500px;
  min-width: 600px;
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .field {
    width: 400px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      width: 50%;
      display: flex;
      justify-content: center;
    }
  }
  .control-btns {
    width: 100%;
    justify-content: space-around;
  }
}
</style>