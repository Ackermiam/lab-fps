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
    <div style="display: flex; flex-direction: column; align-items: center">
      <div class="HUD__wave">Wave {{ wave }}</div>
      <div v-if="enemies.length > 0" class="HUD__ennemies">
        <div v-for="(_, i) in enemies" :key="i" class="HUD__ennemies__enemy">
        </div>
      </div>
      <div v-if="enemies.length === 0" class="HUD__waiting">
        Attendez la prochaine vague
      </div>
    </div>
    <div class="HUD__data">
      <div class="HUD__timer">{{ formattedTime }}</div>
      <div class="HUD__bullets">
        <img src="/balle.png" />
        <span>{{ bullets }}</span>
      </div>
    </div>
    <div class="HUD__pointer"></div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { settings } from "../composables/handleSettings";

const {
  panelIsVisible,
  stopEvent,
  waveEvent,
  timeRemaining,
  wave,
  bullets,
  enemies,
  openPanel,
  redoGame,
  restartTime,
} = settings();

let allTime = 0;

const formattedTime = computed(() => {
  const minutes = Math.floor(timeRemaining.value / 60);
  const seconds = timeRemaining.value % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
});

onMounted(() => {
  const timerInterval = setInterval(() => {
    if (timeRemaining.value > 0) {
      if (!panelIsVisible.value) {
        timeRemaining.value++;
        allTime++;
      }
      if (allTime > 0 && allTime % 120 === 0) {
        if (enemies.value.length > 0) {
          window.dispatchEvent(stopEvent);
          redoGame();
          openPanel();
          restartTime();
          allTime = 0;
        } else {
          window.dispatchEvent(waveEvent);
          restartTime();
          allTime = 0;
          wave.value++;
        }
      }
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

.HUD__wave {
  font-family: "Mewatonia";
  font-size: 2em;
  color: white;
  filter: drop-shadow(0px 0px 8px rgba(0, 238, 255, 0.9));
  margin-bottom: 25px;
}

.HUD__timer {
  color: white;
  font-size: 1.2em;
  font-family: "Mewatonia", sans-serif;
  border-radius: 8px;
  border: 4px solid white;
  padding: 10px 15px;
  filter: drop-shadow(0px 0px 8px rgba(0, 238, 255, 0.9));
  backdrop-filter: blur(150px);
  width: 100px;
  text-align: center;
  animation: animate 3s infinite;
  margin-bottom: 25px;
}

.HUD__data {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.HUD__ennemies {
  display: flex;
  gap: 25px;
}

.HUD__waiting {
  color: white;
  font-size: 1.8em;
  font-family: "Mewatonia", sans-serif;
  filter: drop-shadow(0px 0px 8px rgba(255, 0, 0, 1));
  text-align: center;
  animation: loading 1s infinite;
}

.HUD__ennemies__enemy {
  width: 25px;
  height: 25px;
  background: red;
  filter: drop-shadow(0px 0px 8px rgba(255, 36, 36, 0.9));
  transform: rotate(45deg)
}

.HUD__bullets {
  color: white;
  font-size: 1.2em;
  font-family: "Mewatonia", sans-serif;
  filter: drop-shadow(0px 0px 8px rgba(0, 238, 255, 0.9));
  text-align: center;
  display: flex;
  align-items: center;
}

.HUD__bullets img {
  width: 25px;
}

.HUD__bullets span {
  font-size: 1.5em;
}

p {
  color: white;
  margin: 0;
  position: absolute;
  font-size: 1.5em;
  font-family: "Mewatonia";
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
  top: 53%;
  left: 50%;
  height: 5px;
  width: 5px;
  background: rgba(146, 248, 255, 0.9);
  transform: translateY(-50%);
  animation: displayPointer 2s ease;
  filter: drop-shadow(0px 0px 8px rgba(0, 238, 255, 0.9))
    drop-shadow(0px 0px 8px rgba(0, 238, 255, 0.9));
}

.enter {
  animation: animateEnterTwo 1.5s ease-out;
}

.leave {
  animation: animateLeaveTwo 2s ease;
}
</style>
