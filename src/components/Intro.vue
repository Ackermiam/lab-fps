<template>
  <section class="Intro">
    <div class="Intro__boussole Intro__boussole--big">
      <p class="Intro__boussole--North">N</p>
      <p class="Intro__boussole--North--point">^</p>
      <p class="Intro__boussole--South">S</p>
      <p class="Intro__boussole--West">O</p>
      <p class="Intro__boussole--East">E</p>

      <div class="Intro__boussole Intro__boussole--small">
        <p class="Intro__boussole--North">N</p>
        <p class="Intro__boussole--North--point">^</p>
        <p class="Intro__boussole--South">S</p>
        <p class="Intro__boussole--West">O</p>
        <p class="Intro__boussole--East">E</p>
      </div>
    </div>
    <div>
      <h1>DOOMO</h1>
      <button v-if="!load" @click="beginLoad()">Commencer</button>
      <h2 v-if="load">Chargement ...</h2>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { settings } from "../composables/handleSettings";

const { manageIntro } = settings();
const load = ref(false);

const beginLoad = () => {
  load.value = true;
  setTimeout(() => {
    manageIntro()
  }, 100)
}
</script>

<style scoped>
.Intro {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  color: white;
  margin: 0;
  font-family: 'Play';
  letter-spacing: 0.1em;
  font-size: 5em;
  transition: all .3s;
}

h2 {
  color: white;
  margin: 0;
  font-family: 'Play';
  letter-spacing: 0.1em;
  font-size: 2em;
  animation: loading infinite 3s;
}

@keyframes loading {
  0% {
    opacity: 1;
  }
  30% {
    opacity: 1;
  }
  35% {
    opacity: 0;
  }
  38% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  65% {
    opacity: 0;
  }
  68% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

button {
  border: 2px solid white;
  background: none;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s;
  padding: 15px 20px;
  color: white;
  font-family: "Play";
  font-size: 1.4em;
  letter-spacing: 0.15em;
}

button:hover {
  border-radius: 0px;
}

.Intro__boussole {
  border-radius: 999px;
  border: 4px solid white;
  filter: drop-shadow(0px 0px 8px rgba(0, 238, 255, 0.9));
  backdrop-filter: blur(150px);
}

.Intro__boussole--big {
  animation: animate 3s infinite, rotate 5s infinite;
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
}

.Intro__boussole--small {
  animation: antiRotate 5s infinite;
  width: 200px;
  height: 200px;
}

.Intro__boussole--North {
  top: -35px;
  left: 46%;
}
.Intro__boussole--North--point {
  top: 0px;
  left: 46%;
}

.Intro__boussole--South {
  bottom: -35px;
  left: 46%;
}

.Intro__boussole--West {
  top: 40%;
  left: -35px;
}

.Intro__boussole--East {
  top: 40%;
  right: -35px;
}

p {
  color: white;
  margin: 0;
  position: absolute;
  font-size: 1.5em;
  font-family: "Mewatonia";
}
</style>
