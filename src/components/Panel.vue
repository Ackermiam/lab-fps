<template>
  <section
    class="Panel"
    :class="panelIsVisible ? 'Panel--activate enter' : 'leave'"
  >
    <div class="Panel__menu">
      <div
        class="Panel__menu__items"
        :class="panelIsVisible ? '' : 'contentLeave'"
      >
        <div class="Panel__menu__items__subjects">
          <button @click="showMission()"><h5>Mission</h5></button>
          <button @click="showControls()"><h5>Controles</h5></button>
        </div>
        <div class="Panel__menu__items__content">
          <div v-if="mission">
            <p>
              Copilote.. Co... Copilote ? <br />
              Copilote ? <br />
              Vous m'entendez ? <br />
              On s'est écrasés ici dans ce.. ce monde étrange <br />
              Nous devons sortir d'ici.. et.. au plus vite !
            </p>
            <p>
              Vous avez 2 minutes pour sortir de cet endroit. Au clic sur le
              bouton <strong>Jouer</strong> le chronomètre se déclenchera.
              <br />
              Bonne chance !
            </p>
          </div>
          <div v-if="controls"><p>ZQSD & F pour ouvrir le menu</p></div>
        </div>
      </div>
      <button @click="$emit('closePanelMenu')" class="PlayButton">Jouer</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { settings } from "../composables/handleSettings";

const { panelIsVisible } = settings();

const mission = ref(true);
const controls = ref(false);

const showMission = () => {
  mission.value = true;
  controls.value = false;
}
const showControls = () => {
  mission.value = false;
  controls.value = true;
}
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
  filter: drop-shadow(0px 0px 10px #f700ff);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.Panel__menu__items {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 50px;
  box-sizing: border-box;
  color: white;
}

.Panel__menu__items__content {
  width: 60%;
}
.Panel__menu__items__subjects {
  border-right: 2px solid white;
  padding-right: 25px;
  display: flex;
  flex-direction: column;
}

h5 {
  font-size: 2em;
  font-family: "Play";
  margin: 0;
  text-align: center;
  padding: 10px 15px;
  color: white;
}

p {
  margin-top: 0;
  font-family: "Archivo";
  font-size: 1.4em;

}

button {
  border: 2px solid white;
  background: none;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s;
  margin-bottom: 50px;
}

button:hover {
  border-radius: 0px;
}

.PlayButton {
  padding: 10px 15px;
  color: white;
  margin: 25px;
}


.enter {
  animation: animateEnter 1.5s ease-out;
}

.leave {
  animation: animateLeave 2s ease;
}

.contentLeave {
  animation: contentLeave 0.5s ease;
}

@keyframes animate {
  0% {
    filter: drop-shadow(0px 0px 20px #f700ff) drop-shadow(0px 0px 40px #f700ff);
  }
  25% {
    filter: drop-shadow(0px 0px 20px #00eeff) drop-shadow(0px 0px 40px #00eeff);
  }
  50% {
    filter: drop-shadow(0px 0px 30px #f700ff) drop-shadow(0px 0px 60px #f700ff);
  }
  75% {
    filter: drop-shadow(0px 0px 30px #00eeff) drop-shadow(0px 0px 60px #00eeff);
  }
  100% {
    filter: drop-shadow(0px 0px 20px #f700ff) drop-shadow(0px 0px 40px #f700ff);
  }
}

@keyframes animateEnter {
  0% {
    top: -100%;
    width: 0vw;
  }

  25% {
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

  10% {
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

@keyframes contentLeave {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}
</style>
