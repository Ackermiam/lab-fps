<template>
  <section class="Home">
    <div ref="scene" class="Scene"></div>
    <Panel @closePanelMenu="closeMenu()" @closePanelRedoMenu="closeRedoMenu()"/>
    <HUD />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { Engine } from "../engine/engine";
import { settings } from "../composables/handleSettings";
import Panel from "./Panel.vue";
import HUD from "./HUD.vue"

const { closePanel, openPanel, panelIsVisible, redoGame, beginGame } = settings();

let engine: Engine;

const scene = ref();

const closeMenu = () => {
  closePanel();
  beginGame();
  engine.enablePointerLock();
};

const closeRedoMenu = () => {
  closePanel();
  beginGame();
  engine.restart(1);
  engine.enablePointerLock();
};

onMounted(() => {
  engine = new Engine(scene.value);

  window.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();

    if (key == "f") {
      openPanel();
      engine.disablePointerLock();
    }
  });
});
</script>

<style scoped>
.Home {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}
</style>
