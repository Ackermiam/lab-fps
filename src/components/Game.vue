<template>
  <section class="Home">
    <div ref="scene" class="Scene"></div>
    <Panel @closePanelMenu="closeMenu()" @closePanelRedoMenu="closeRedoMenu()"/>
    <Endgame v-if="endgameIsVisible"/>
    <HUD />
    <Gun />
    <div class="IntroGame"></div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Engine } from "../engine/engine";
import { settings } from "../composables/handleSettings";
import Panel from "./Panel.vue";
import HUD from "./HUD.vue"
import Gun from "./Gun.vue"
import Endgame from "./Endgame.vue"

const { closePanel, openPanel, beginGame, choseLevel, endgameIsVisible } = settings();

let engine: Engine;

const scene = ref();

const closeMenu = () => {
  closePanel();
  beginGame();
  engine.enablePointerLock();
  clearInterval(engine.setBulletInterval);
};

const closeRedoMenu = () => {
  closePanel();
  beginGame();
  engine.restart(choseLevel());
  engine.enablePointerLock();
};

onMounted(() => {
  engine = new Engine(scene.value);

  window.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();

    if (key == "f") {
      openPanel();
      engine.disablePointerLock();
      clearInterval(engine.setBulletInterval);
    }
  });
});
</script>

<style scoped>
.Home {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.IntroGame {
  position: absolute;
  height: 2000px;
  width: 2000px;
  border: 1200px solid black;
  border-radius: 999px;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: expand 2.7s ease;
}

@keyframes expand {
  0% {
    height: 100px;
    width: 100px;
    z-index: 10;
  }

  99% {
    z-index: -1;
  }

  100% {
    height: 2000px;
    width: 2000px;
  }
}
</style>
