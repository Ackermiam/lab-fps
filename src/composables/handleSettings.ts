import { ref } from "vue";
import { layers } from "../engine/data/layers/layers";

const display = ref("Home");
const chosenLevel = ref(0);
const panelIsVisible = ref(true);
const stopEvent = new CustomEvent('loseGame', {detail: 'lose'})

//MENU
const displayMenu = ref(false);
const displayBeginMenu = ref(true);

export const settings = () => {
  const beginGame = () => {
    displayBeginMenu.value = true;
    displayMenu.value = false;
  }

  const redoGame = () => {
    displayBeginMenu.value = false;
    displayMenu.value = true;
  }

  const choseLevel = () => {
    const random = Math.floor(Math.random() * layers.length);
    return random;
  };

  const selectedLevel = (selected?: number) => {
    const chosen = selected != undefined ? selected : choseLevel();
    chosenLevel.value = chosen;
  };

  const triggerHome = () => {
    display.value = "Home";
  };

  const triggerGame = (layer?: number) => {
    selectedLevel(layer);
    display.value = "Game";
  };

  const triggerArcadeMode = () => {
    display.value = "Arcade";
  };

  const openPanel = () => {
    panelIsVisible.value = true;
  }
  const closePanel = () => {
    panelIsVisible.value = false;
  }

  return {
    display,
    chosenLevel,
    panelIsVisible,
    stopEvent,
    displayMenu,
    displayBeginMenu,
    triggerHome,
    triggerGame,
    triggerArcadeMode,
    selectedLevel,
    choseLevel,
    openPanel,
    closePanel,
    beginGame,
    redoGame
  };
};
