<template>
  <section class="Home">
    <div ref="scene" class="Scene"></div>
    <Panel>
      <div class="PanelGame">
        <button
          @click="
            engine.enablePointerLock();
            closePanel();
          "
        >
          Jouer
        </button>
      </div>
    </Panel>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { Engine } from "../engine/engine";
import { settings } from "../composables/handleSettings";
import Panel from "./Panel.vue";

const { closePanel, openPanel } = settings();

let engine: Engine;

const scene = ref();

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

.PanelGame {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}

button {
  background: none;
  border: 1px solid white;
  padding: 10px 15px;
  color: white;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s;
}

button:hover {
  border-radius: 0px;
}
</style>
