<template>
  <div class="Home">
    <Game v-if="!displayIntro"/>
    <Intro v-if="displayIntro"/>
  </div>
</template>

<script setup lang="ts">
import { settings } from "./composables/handleSettings";
import Game from "./components/Game.vue";
import Intro from "./components/Intro.vue";

const { displayIntro } = settings();
</script>

<style scoped>
.Home {
  overflow: hidden;
}
</style>
