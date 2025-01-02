<template>
  <section class="Panel" :class="panelIsVisible ? 'Panel--activate enter':'leave'">
    <div class="Panel__menu">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { settings } from "../composables/handleSettings";

const { panelIsVisible } = settings();
</script>

<style scoped>
.Panel {
  position: absolute;
  width: 80vw;
  height: 80vh;
  left: 50%;
  top: -100%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(100px);
}

.Panel--activate {
  top: 50%;
}

.Panel__menu {
  height: 100%;
  width: 100%;
  border: 4px solid white;
  border-radius: 8px;
  animation: animate 6s infinite;
  overflow: hidden;
}

.enter {
  animation: animateEnter 1.5s ease-out;
}

.leave {
  animation: animateLeave 1.5s ease;
}



@keyframes animate {
  0% {
    filter: drop-shadow(0px 0px 10px #f700ff);
  }

  25% {
    filter: drop-shadow(0px 0px 10px #00eeff);
  }
  50% {
    filter: drop-shadow(0px 0px 10px #f700ff);
  }
  75% {
    filter: drop-shadow(0px 0px 10px #00eeff);
  }

  100% {
    filter: drop-shadow(0px 0px 10px #f700ff);
  }
}

@keyframes animateEnter {
  0% {
    top: -100%;
    width: 0vw;
  }

  25%{
    top: 40%;
    width: 0vw;
  }

  50% {
    top: 50%;
    width: 0vw;
  }

  75% {
    width: 0vw;
  }

  100% {
    width: 80vw;
  }
}

@keyframes animateLeave {
  0% {
    width: 80vw;
    top: 50%;
  }

  25% {
    width: 0vw;
    top: 50%;
  }

  50% {
    top: 50%;
    width: 0vw;
  }

  75% {
    top: 40%;
    width: 0vw;
  }

  100% {
    width: 0vw;
    top: -100%;
  }
}

@keyframes display {
  0% {
    visibility: none;
  }

  100% {
    visibility: visible;
  }
}
</style>
