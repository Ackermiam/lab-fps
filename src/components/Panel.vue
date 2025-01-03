<template>
  <section
    class="Panel"
    :class="panelIsVisible ? 'Panel--activate enter' : 'leave'"
  >
    <div class="Panel__menu">
      <div class="Panel__menu__items" :class="panelIsVisible ? '': 'contentLeave'">
        <div class="Panel__menu__items__subjects">
          <h5>Mission</h5>
          <h5>Controles</h5>
        </div>
        <div class="Panel__menu__items__content">
          <div><p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles</p></div>
          <div><p>Mettre les différents controls</p></div>
        </div>
      </div>
      <button @click="$emit('closePanelMenu')">Jouer</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { settings } from "../composables/handleSettings";

const { panelIsVisible } = settings();
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
  width: 20%;
  border-right: 2px solid white;
}

h5 {
  font-size: 2em;
  margin-top: 0;
}

p {
  margin-top: 0;
}

button {
  background: none;
  border: 1px solid white;
  padding: 10px 15px;
  color: white;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s;
  margin: 25px;
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

.contentLeave {
  animation: contentLeave .5s ease;
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

  100% {
    opacity: 0;
  }
}
</style>
