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
    <hr />
    Filters:
    {{ new Date() | moment("from", "Jan. 11th, 2000", true) }}
    <span>{{ new Date() | moment('add', '6 days', 'calendar', null, { nextWeek: '[Happens in a week]' }) }}</span>
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
      // lastLoginTimestamp: new Date().
    };
  },
  computed: {
    inlineStyle() {
      return { "font-style": this.fStyle, fontSize: this.fSize + "px" };
    }
  },
  methods: {
    showMsg() {
      EventBus.$emit(MSG_EVENT, { txt: "Hello from Messing", type: "success" });
    }
  }
};
</script>

<style>
</style>