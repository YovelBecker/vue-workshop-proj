<template>
  <transition name="fade">
    <div v-if="msg" class="msg-container shadow" :class="msgType">
      <span class="side-bar"></span>
      <h3>{{msg.txt}}</h3>
    </div>
  </transition>
</template>

<script>
import EventBus, { MSG_EVENT } from "../services/EventBusService.js";

export default {
  data() {
    return {
      msg: null
    };
  },
  created() {
    EventBus.$on(MSG_EVENT, this.showMsg);
  },
  destroyed() {
    EventBus.$off(MSG_EVENT);
  },
  computed: {
    msgType() {
      var obj = {};
      obj[this.msg.type] = true;
      return obj;
    }
  },
  methods: {
    showMsg(msg) {
      this.msg = msg;
      setTimeout(() => (this.msg = null), 2000);
    }
  }
};
</script>

<style lang="scss">
.msg-container {
  width: 200px;
  border: 1px solid rgba(204, 204, 204, 0.459);
  position: fixed;
  bottom: 60px;
  left: 20px;
  border-radius: 5px;
  color: rgb(65, 65, 65);
  span {
    display: inline-block;
    position: absolute;
    width: 10px;
    height: 100%;
    border-radius: 5px 0 0 5px;
  }
  h3 {
    margin: 10px 20px;
  }
}
.success {
  background-color: rgba(199, 255, 199, 0.74);
  span {
    background-color: rgb(50, 173, 50);
  }
}
.info {
  background-color: rgba(251, 255, 199, 0.74);
  span {
    background-color: rgb(238, 235, 50);
  }
}
.warning1 {
  background-color: rgba(255, 207, 199, 0.74);
  span {
    background-color: rgb(238, 72, 50);
  }
}

// .fade-enter-active, .fade-leave-active {
//   transition: opacity .5s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }

.fade-enter {
  opacity: 0;
  bottom: 50px;
}

.fade-enter-active {
  transition: opacity 0.2s, bottom 0.2s;
}

.fade-leave-active {
  transition: opacity 0.2s, bottom 0.2s;
}
.fade-leave-to {
  opacity: 0;
  bottom: 70px;
}
</style>