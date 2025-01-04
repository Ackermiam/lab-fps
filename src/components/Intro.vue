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
      <button @click="manageIntro()">Commencer</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { settings } from "../composables/handleSettings";

const { manageIntro } = settings();
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

@keyframes antiRotate {
  0% {
    transform: rotateZ(5deg)
  }
  15% {
    transform: rotateZ(120deg)
  }
  30% {
    transform: rotateZ(90deg)
  }
  50% {
    transform: rotateZ(20deg)
  }
  75% {
    transform: rotateZ(45deg)
  }
  100% {
    transform: rotateZ(5deg)
  }
}
</style>
