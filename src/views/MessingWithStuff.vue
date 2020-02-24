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
    <button @click="showMsg">Show MSG component</button>
    <hr />Filters:
    <div>
      <span>{{ new Date() | moment("YYYY") }}</span>
    </div>
    <div>
      <span>{{ new Date() | moment('add', '6 days', 'calendar', null, { nextWeek: '[Happens in a week]' }) }}</span>
    </div>
    <hr />
    <button @click="isLoginShown = true">Show Modal</button>
    <VueModal v-if="isLoginShown" @close="isLoginShown = false">
      <h1 slot="header">Login</h1>
      <form slot="body">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
      <p slot="footer">
        Forgot your password?
        <a href="#">Check here!</a>
      </p>
    </VueModal>
  </div>
</template>

<script>
import EventBus, { MSG_EVENT } from "../services/EventBusService";
import VueModal from "./MessingWithStuff/VueModal";
export default {
  data() {
    return {
      fStyle: "italic",
      fSize: 20,
      isShown: true,
      isLoginShown: false
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
  },
  components: {
    VueModal
  }
};
</script>

<style>
</style>