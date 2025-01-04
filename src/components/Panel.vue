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
          <button @click="showControls()"><h5>Controls</h5></button>
        </div>
        <div class="Panel__menu__items__content">
          <div v-if="mission" class="Content--mission">
            <p style="border-left: 2px solid white; padding-left: 15px">
              Copilote.. Co... Copilote ? <br />
              Copilote ? <br />
              Vous m'entendez ? <br />
              On s'est écrasés ici dans ce.. ce monde étrange <br />
              Nous devons sortir de là.. et.. au plus vite !
            </p>
            <p class="Content--mission__instructions">
              Vous avez 2 minutes pour sortir de cet endroit. Au clic sur le
              bouton <strong>"Jouer"</strong>, le chronomètre se déclenchera.
              <br />
              Bonne chance !
            </p>
          </div>
          <div v-if="controls" class="Content--controls">
            <div class="Content--controls__layout">
              <div class="Control">
                <p class="Key">Z</p>
                <p>Avancer</p>
              </div>

              <div class="Control--group">
                <div class="Control">
                  <p class="Key">Q</p>
                  <p>Gauche</p>
                </div>
                <div class="Control">
                  <p class="Key">S</p>
                  <p>Reculer</p>
                </div>
                <div class="Control">
                  <p class="Key">D</p>
                  <p>Droite</p>
                </div>
              </div>
            </div>
            <div class="Control--menu">
              <div class="Control">
                <p class="Key">F</p>
                <p>Menu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button v-if="displayBeginMenu" @click="$emit('closePanelMenu')" class="PlayButton">
          Jouer
        </button>
        <button v-if="displayMenu" @click="$emit('closePanelRedoMenu')" class="PlayButton">
          Recommencer
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { settings } from "../composables/handleSettings";

const { panelIsVisible, displayMenu, displayBeginMenu } = settings();

const mission = ref(true);
const controls = ref(false);

const showMission = () => {
  mission.value = true;
  controls.value = false;
};
const showControls = () => {
  mission.value = false;
  controls.value = true;
};
</script>

<style scoped>
.Panel {
  position: absolute;
  width: 80vw;
  height: 80vh;
  left: 50%;
  top: -100%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(150px);
}

.Panel--activate {
  top: 50%;
}

.Panel__menu {
  height: 100%;
  width: 100%;
  border: 4px solid white;
  border-radius: 8px;
  animation: animate 3s infinite;
  filter: drop-shadow(0px 0px 8px rgba(0, 238, 255, 0.9));
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

.Content--mission {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.Content--mission__instructions {
  border: 2px solid white;
  padding: 15px;
  border-radius: 6px;
  text-align: center;
}

.Content--controls {
  display: flex;
  align-items: end;
}

.Content--controls__layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-right: 20px;
}

.Control {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
}

.Control--group {
  display: flex;
  align-items: center;
}

.Control--menu {
  display: flex;
  align-items: center;
  text-align: center;
}

.Key {
  border: 2px solid white;
  width: 60px;
  height: 45px;
  margin: 0;
  padding-top: 10px;
}

h5 {
  font-size: 2em;
  font-family: "Play";
  letter-spacing: 0.1em;
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
  padding: 15px 20px;
  color: white;
  margin: 25px;
  font-family: "Play";
  font-size: 1.4em;
  letter-spacing: 0.15em;
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
