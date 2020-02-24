<template>
  <div class="messing-container">
    <div v-show="isShown">First</div>
    <div v-show="!isShown">second</div>
    <button @click="isShown = !isShown">Toggle</button>
    <hr />
    <div :style="inlineStyle">Thanks!</div>
    <hr />
    <router-view></router-view>
    <hr />
    <button @click="showMsg">Show Msg</button>
  </div>
</template>

<script>
import EventBus, { MSG_EVENT } from "../services/EventBusService";

export default {
  data() {
    return {
      fStyle: "italic",
      fSize: 20,
      isShown: true
    };
  },
  computed: {
    inlineStyle() {
      return { "font-style": this.fStyle, fontSize: this.fSize + "px" };
    }
  },
  methods: {
    showMsg() {
      EventBus.$emit(MSG_EVENT, { txt: "Hello from Messing", type: 'success' });
    }
  }
};
</script>

<style>
</style>