<template>
  <div class="car-preview-container shadow" :class="{'is-hybrid': car.isHybrid}">
    <h1>{{car.name}}</h1>
    <div class="card-content">
      <div>
        <h4>{{car.vendor}}</h4>
        <h5 v-show="car.isHybrid" class="is-hybrid">I'm Hybrid!</h5>
        <h5>Max Speed: {{car.maxSpeed}}</h5>
        <!-- <router-link :to="`car/${car._id}`">
          <button class="btn shadow">More Info</button>
        </router-link> -->
          <button @click.prevent="onRemoveCar" class="btn shadow">Remove Car</button>
      </div>
      <img :src="car.img" :alt="car.vendor" />
    </div>
  </div>
</template>

<script>
import CarService from "../services/CarService";
export default {
  props: {
    car: {
      required: true,
      type: Object
    }
  },
  methods:{
    onRemoveCar(){
      this.$emit("removeCar", {id:this.car._id, name: this.car.name})
    }
  }
};
</script>

<style lang="scss">
.car-preview-container {
  min-height: 350px;
  width: 350px;
  margin: 0 25px 20px;
  padding: 10px;
  border-radius: 20px;
  background-color: rgba(160, 212, 255, 0.3);
  h1 {
    text-transform: capitalize;
    letter-spacing: 5px;
    text-align: center;
  }
  img {
    width: 180px;
    min-height:180px;
    object-fit: cover;
  }
  .card-content {
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr 180px;
    grid-template-rows: 180px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      h4 {
        text-transform: uppercase;
        letter-spacing: 5px;
      }
    }
  }
}

.is-hybrid {
  background-color: rgba(255, 152, 112, 0.3);
}
h5.is-hybrid {
  margin:0;
    color: rgb(17, 0, 168);
  background-color: transparent;
}
</style>