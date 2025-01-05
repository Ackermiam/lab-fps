<template>
  <section
    class="Gun"
    :class="panelIsVisible ? 'leave' : 'Gun--activate enter'"
  >
    <img src="/fpsgunr.png"/>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { settings } from "../composables/handleSettings";

const { panelIsVisible } = settings();

</script>

<style scoped>
.Gun {
  position: absolute;
  bottom: -100%;
  width: 100vw;
  height: 100vh;
}

.Gun--activate {
  bottom: 0px;
}

img {
  position: absolute;
  bottom: -15px;
  right: -15px;
  filter: drop-shadow(0px 0px 8px rgba(0, 238, 255, 0.9));
  animation: animateGun 4s infinite;
}

.enter {
  animation: animateEnterGun 1.5s ease-out;
}

.leave {
  animation: animateLeaveGun 2s ease;
}
</style>