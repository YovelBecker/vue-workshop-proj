<template>
  <form @submit.prevent="setFilter" class="filter-container shadow">
    {{maxSpeed}}
    <label class="field">
      Search:
      <input v-model="filterBy.txt" type="text" placeholder="Text" name="txt" />
    </label>
    <label class="field">
      Speed:
      <input v-model="filterBy.maxSpeed" type="number" min="0" name="maxSpeed" />
    </label>
    <label class="field">
      Hybrid:
      <input v-model="filterBy.isHybrid" type="checkbox" name="isHybrid" />
      <span class="custom-checkbox"></span>
    </label>
    <button class="btn">Search</button>
  </form>
</template>

<script>
export default {
  name: "CarFilter",
  props:{
    maxSpeed:{
      isRequired:false,
      type:Number
    }
  },
  data() {
    return {
      filterBy: {
        txt: "",
        maxSpeed: 0,
        isHybrid: null
      }
    };
  },
  created() {
    if(this.maxSpeed) this.filterBy.maxSpeed = this.maxSpeed
  },
  methods: {
    setFilter() {
      if(this.filterBy.isHybrid === null ) delete this.filterBy.isHybrid;
      this.$emit('setFilter', {...this.filterBy, maxSpeed:+this.filterBy.maxSpeed})
    }
  }
};
</script>

<style lang="scss">
.filter-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  padding: 15px;
  min-height: 60px;
  width: 80%;
  user-select: none;
  font-size: 20px;
  & > * {
    margin: 0 15px;
  }
  .field {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn:hover {
    font-size: 0.8rem;
  }
  input[name="maxSpeed"] {
    width: 100px;
  }
}
</style>