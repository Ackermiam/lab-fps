import { ref } from "vue";
import { layers } from "../engine/data/layers/layers";

const display = ref("Home");
const chosenLevel = ref(0);
const panelIsVisible = ref(true);
const endgameIsVisible = ref(false);
const stopEvent = new CustomEvent("loseGame", { detail: "lose" });
const waveEvent = new CustomEvent("wave", { detail: "newWave" });
const win = ref(false);
const bullets = ref(300);

//MENU
const displayMenu = ref(false);
const displayBeginMenu = ref(true);

//INTRO
const displayIntro = ref(true);

//TEMPS RESTANT
const timeRemaining = ref(1);

//WAVES
const wave = ref(1);

//ENEMIES
const enemies = ref([
  {life: 50},
  {life: 50},
  {life: 50},
])

export const settings = () => {
  const manageWin = (state: boolean) => {
    win.value = state
  }

  const randomPlace = (): number => {
    return Math.floor(Math.random() * 24) - 11.5
  }

  const restartTime = () => {
    timeRemaining.value = 1;
  };

  const manageEndgame = () => {
    panelIsVisible.value = !panelIsVisible.value;
    endgameIsVisible.value = true;
  };

  const closeEndgame = () => {
    panelIsVisible.value = true;
    endgameIsVisible.value = false;
  }

  const manageIntro = () => {
    displayIntro.value = !displayIntro.value;
  };

  const beginGame = () => {
    displayBeginMenu.value = true;
    displayMenu.value = false;
  };

  const redoGame = () => {
    displayBeginMenu.value = false;
    displayMenu.value = true;
    wave.value = 1;
  };

  const choseLevel = () => {
    const random = Math.floor(Math.random() * layers.length);
    return random;
  };

  const selectedLevel = (selected?: number) => {
    chosenLevel.value = selected != undefined ? selected : choseLevel();
  }
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
  };
  const closePanel = () => {
    panelIsVisible.value = false;
  };

  return {
    display,
    chosenLevel,
    panelIsVisible,
    stopEvent,
    waveEvent,
    wave,
    displayMenu,
    displayBeginMenu,
    displayIntro,
    endgameIsVisible,
    timeRemaining,
    win,
    bullets,
    enemies,
    randomPlace,
    triggerHome,
    triggerGame,
    triggerArcadeMode,
    selectedLevel,
    choseLevel,
    openPanel,
    closePanel,
    beginGame,
    redoGame,
    manageIntro,
    manageEndgame,
    restartTime,
    closeEndgame,
    manageWin
  };
};
