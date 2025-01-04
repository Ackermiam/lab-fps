<template>
  <section
    class="Endgame"
    :class="endgameIsVisible ? 'Endgame--activate enter' : 'leave'"
  >
    <div class="Endgame__menu" >
      <div class="Endgame__menu__items" :class="endgameIsVisible ? '' : 'contentLeave'">
        <h2>
          {{
            win
              ? "Félicitations ! Vous vous en êtes bien sorti copilote !"
              : "Oh non.. noooon.. copilote.. je suis arrivé trop tard.. "
          }}
        </h2>
        <button @click="closeEndgame()">Continuer</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { settings } from "../composables/handleSettings";

const { endgameIsVisible, closeEndgame, win } = settings();
</script>

<style scoped>
.Endgame {
  position: absolute;
  width: 80vw;
  height: 80vh;
  left: 50.3%;
  top: -100%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  animation: animate 3s infinite;
  backdrop-filter: blur(150px);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 4px solid white;
}

.Endgame--activate {
  top: 50%;
}

.Endgame__menu {
  filter: drop-shadow(0px 0px 8px rgba(0, 238, 255, 0.9));
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 25px;
}

.Endgame__menu__items {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
}

h2 {
  font-family: "Archivo";
  font-size: 2em;
  color: white;
}

button {
  border: 2px solid white;
  background: none;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s;
  margin-bottom: 50px;
  padding: 15px 20px;
  color: white;
  margin: 25px;
  font-family: "Play";
  font-size: 1.4em;
  letter-spacing: 0.15em;
}

button:hover {
  border-radius: 0px;
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
