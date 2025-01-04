<template>
  <section
    class="HUD"
    :class="panelIsVisible ? 'leave' : 'HUD--activate enter'"
  >
    <div class="HUD__boussole">
      <p class="HUD__boussole--North">N</p>
      <p class="HUD__boussole--North--point">^</p>
      <p class="HUD__boussole--South">S</p>
      <p class="HUD__boussole--West">O</p>
      <p class="HUD__boussole--East">E</p>
    </div>
    <div class="HUD__timer">{{ formattedTime }}</div>
    <div class="HUD__pointer"></div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { settings } from "../composables/handleSettings";

const { panelIsVisible, stopEvent, openPanel, redoGame } = settings();

const timeRemaining = ref(120);

const formattedTime = computed(() => {
  const minutes = Math.floor(timeRemaining.value / 60);
  const seconds = timeRemaining.value % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
});

onMounted(() => {
  const timerInterval = setInterval(() => {
    if (timeRemaining.value > 0) {
      if (!panelIsVisible.value) timeRemaining.value--;
    } else {
      //clearInterval(timerInterval);
      window.dispatchEvent(stopEvent);
      redoGame();
      openPanel();
      timeRemaining.value = 120;
    }
  }, 1000);
});
</script>

<style scoped>
.HUD {
  position: absolute;
  top: -100%;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: start;
  box-sizing: border-box;
  padding: 0 50px;
}

.HUD--activate {
  top: 0px;
  padding-top: 50px;
}

.HUD__boussole {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 999px;
  border: 4px solid white;
  animation: animate 3s infinite, rotate 5s infinite;
  filter: drop-shadow(0px 0px 8px rgba(0, 238, 255, 0.9));
  backdrop-filter: blur(150px);
}

.HUD__timer {
  color: white;
  font-size: 1.2em;
  font-family: 'Mewatonia', sans-serif;
  border-radius: 8px;
  border: 4px solid white;
  padding: 10px 15px;
  filter: drop-shadow(0px 0px 8px rgba(0, 238, 255, 0.9));
  backdrop-filter: blur(150px);
  width: 100px;
  text-align: center;
  animation: animate 3s infinite;
}

p {
  color: white;
  margin: 0;
  position: absolute;
  font-size: 1.5em;
  font-family: 'Mewatonia';
}

.HUD__boussole--North {
  top: -35px;
  left: 46%;
}
.HUD__boussole--North--point {
  top: 0px;
  left: 46%;
}

.HUD__boussole--South {
  bottom: -35px;
  left: 46%;
}

.HUD__boussole--West {
  top: 40%;
  left: -35px;
}

.HUD__boussole--East {
  top: 40%;
  right: -35px;
}

.HUD__pointer {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 5px;
  width: 5px;
  background: rgba(146, 248, 255, 0.9);
  transform: translateY(-50%);
  animation: displayPointer 2s ease;
  filter: drop-shadow(0px 0px 8px rgba(0, 238, 255, 0.9)) drop-shadow(0px 0px 8px rgba(0, 238, 255, 0.9));
}

.enter {
  animation: animateEnter 1.5s ease-out;
}

.leave {
  animation: animateLeave 2s ease;
}

@keyframes animate {
  0% {
    box-shadow: 0px 0px 5px rgba(0, 238, 255, 0.3);
  }
  10% {
    box-shadow: 0px 0px 12px rgba(0, 238, 255, 0.9);
  }
  15% {
    box-shadow: 0px 0px 8px rgba(0, 238, 255, 0.5);
  }
  20% {
    box-shadow: 0px 0px 10px rgba(0, 238, 255, 0.8);
  }
  25% {
    box-shadow: 0px 0px 6px rgba(0, 238, 255, 0.3);
  }
  40% {
    box-shadow: 0px 0px 14px rgba(0, 238, 255, 1);
  }
  50% {
    box-shadow: 0px 0px 7px rgba(0, 238, 255, 0.4);
  }
  75% {
    box-shadow: 0px 0px 6px rgba(0, 238, 255, 0.3);
  }
  100% {
    box-shadow: 0px 0px 5px rgba(0, 238, 255, 0.3);
  }
}

@keyframes animateEnter {
  0% {
    top: -100%;
  }

  100% {
    top: 50px;
  }
}

@keyframes animateLeave {
  0% {
    top: 50px;
  }

  100% {
    top: -100%;
  }
}

@keyframes displayPointer {
  0% {
    z-index: -100;
  }

  100% {
    z-index: 1;
  }
}

@keyframes rotate {
  0% {
    transform: rotateZ(2deg)
  }
  10% {
    transform: rotateZ(50deg)
  }
  20% {
    transform: rotateZ(8deg)
  }
  50% {
    transform: rotateZ(42deg)
  }
  70% {
    transform: rotateZ(180deg)
  }
  100% {
    transform: rotateZ(2deg)
  }
}
</style>