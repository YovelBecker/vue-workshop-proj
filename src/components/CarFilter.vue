<template>
  <form @submit.prevent="setFilter" class="filter-container shadow">
    <div class="flex">
      <label class="field">
        <div class="text">Max Speed</div>
        <input v-model="filterBy.maxSpeed" type="text" placeholder="Max Speed" name="txt" />
      </label>
      <label class="field">
        <div class="text">Text</div>
        <input v-model="filterBy.txt" type="text" placeholder="Text" name="txt" />
      </label>
    </div>
    <div class="flex">
      <label class="field">
        <div class="text">Search</div>
        <input v-model="filterBy.isHybrid" type="checkbox" name="isHybrid" />
        <span class="custom-checkbox"></span>
      </label>
      <label class="field">
        <button class="btn">Search</button>
      </label>
    </div>
  </form>
</template>

<script>
export default {
  name: "CarFilter",
  props: {
    txt: {
      type: String,
      default: "txt not supplied",
      validator(value) {
        return value.length < 30;
      }
    },
    isHybrid: Boolean,
    maxSpeed: Number
  },
  // props: {
  //   txt: String,
  //   isHybrid: Boolean,
  //   maxSpeed: Number
  // },
  // props: ["txt", "isHybrid", "maxSpeed"],
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
    if (this.maxSpeed) this.filterBy.maxSpeed = this.maxSpeed;
    this.filterBy.isHybrid = this.isHybrid;
    this.filterBy.txt = this.txt;
  },
  methods: {
    setFilter() {
      if (this.filterBy.isHybrid === null) delete this.filterBy.isHybrid;
      this.$emit("setFilter", {
        ...this.filterBy,
        maxSpeed: +this.filterBy.maxSpeed
      });
    }
  }
};
</script>

<style lang="scss">
.filter-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px auto;
  padding: 15px;
  min-height: 60px;
  width: 80%;
  user-select: none;
  font-size: 20px;
  .text {
    width: 120px;
  }
  .flex {
    width: 100%;
    justify-content: space-between;

    & > * {
      flex-basis: 50%;
    }
  }
  & > * {
    margin: 0 15px;
  }

  .field {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    input {
      width: 120px;
    }
  }
  .btn:hover {
    font-size: 0.8rem;
  }
  input[name="maxSpeed"] {
    width: 100px;
  }
}
</style>