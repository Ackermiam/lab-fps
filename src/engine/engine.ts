import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Clock,
  AmbientLight,
  Vector3,
} from "three";

import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

import Stats from "stats.js";
import { settings } from "../composables/handleSettings.ts";
import Environment from "./models/environment.ts";
import Character from "./models/character.ts";
import Enemy from "./models/enemy.ts";
import GUI from "lil-gui";
//import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const {
  chosenLevel,
  panelIsVisible,
  manageEndgame,
  redoGame,
  beginGame,
  restartTime,
  manageWin,
} = settings();

export class Engine {
  scene: Scene;
  renderer: WebGLRenderer;
  camera: PerspectiveCamera;
  meshs: any[];
  stats: Stats;
  ref: HTMLElement;
  pixelRatio: number;
  animationFrameId: number | null = null;
  mousePos: {
    x: number;
    y: number;
  };
  mouseDirection: Vector3;
  character: Character | null = null;
  environment: Environment | null = null;
  enemy: Enemy | null = null;
  layer: number;
  clock: Clock;
  delta: number;
  elapsedTime: number;
  sensitivity: number;
  globalLight: AmbientLight;
  fov: {
    base: number;
    current: number;
    accel: number;
    portal: number;
    isChanging: boolean;
    isPortal: boolean;
    isAccelerate: boolean;
    isDecelerate: boolean;
  };
  composer: any;

  constructor(ref: HTMLElement) {
    const { width, height } = ref.getBoundingClientRect();
    this.stats = new Stats();
    this.stats.showPanel(0);
    document.body.appendChild(this.stats.dom);
    this.meshs = [];
    this.mousePos = { x: 0, y: 0 };
    this.ref = ref;
    this.scene = new Scene();
    this.fov = {
      base: 90,
      current: 90,
      accel: 110,
      portal: 160,
      isChanging: false,
      isPortal: false,
      isAccelerate: false,
      isDecelerate: false,
    };
    this.camera = new PerspectiveCamera(this.fov.base, width / height, 0.1, 24);
    this.camera.position.set(0, 0, 0);
    this.camera.lookAt(0, 0, 0);
    this.layer = chosenLevel.value;
    this.clock = new Clock();
    this.elapsedTime = 0;
    this.delta = 0;
    this.sensitivity = 0.002;
    this.mouseDirection = new Vector3(0, 0, 1);
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    this.renderer = new WebGLRenderer({
      antialias: true,
    });

    this.composer = new EffectComposer(this.renderer);
    this.composer.renderTarget1.samples = 8;
    this.composer.renderTarget2.samples = 8;
    this.renderer.setClearColor(0, 0);
    this.renderer.setPixelRatio(this.pixelRatio);
    const resizeCanvas = window.devicePixelRatio > 1;
    this.composer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setSize(width, height, resizeCanvas);

    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass();
    bloomPass.strength = 0.4;
    bloomPass.radius = 0.5;
    this.composer.addPass(bloomPass);

    const outputPass = new OutputPass();
    this.composer.addPass(outputPass);

    this.globalLight = new AmbientLight(0x581563, 0);
    this.scene.add(this.globalLight);
    /*const controls = new OrbitControls( this.camera, this.renderer.domElement );
    controls.update();*/
    ref.appendChild(this.renderer.domElement);
    this.stats.update();
    this.setup();
  }

  tick() {
    this.composer.render();
    this.stats.begin();
    if(panelIsVisible.value === false) {
      this.delta = this.clock.getDelta();
      this.elapsedTime = this.clock.getElapsedTime();
      this.tickChildren();
    }
    this.checkFov();
    this.stats.end();

    this.animationFrameId = requestAnimationFrame(() => {
      this.tick();
    });
  }

  setup() {
    this.environment = new Environment(this);
    this.character = new Character(this);
    this.enemy = new Enemy(this);
    this.meshs.push(this.environment, this.character, this.enemy);
    this.addChildren();
    this.setupGUI();
    this.setView();
    this.registerEventListeners();
    this.tick();
    setTimeout(() => {
      this.character.canMove = true;
    }, 100);
  }

  setupGUI() {
    const gui = new GUI({ title: "Acker'tools", closeFolders: true });
    const sceneGUI = gui.addFolder("Environment");
    const shaderPP = gui.addFolder("ShaderPP");
    const cameraGUI = gui.addFolder("Camera");
    const lightGUI = gui.addFolder("Light");
    gui.hide();

    cameraGUI
      .add(this.camera, "fov", 20, 140, 0.5)
      .name("FOV")
      .onChange(() => {
        this.camera.updateProjectionMatrix();
      });

    lightGUI
      .add(this.character?.light, "distance", 0.1, 7, 0.05)
      .name("distance light");

    lightGUI
      .addColor(this.character?.light, "color")
      .name("color light")
      .onChange((e) => {
        console.log(e.getHexString());
      });

    sceneGUI
      .add(this.environment?.mesh.children[0].material, "wireframe")
      .name("ground wireframe");

    shaderPP.add(this.composer.passes[1], "strength", 0.1, 5).name("strength");

    window.addEventListener("keydown", (e) => {
      if (e.key == "t") gui.show(gui._hidden);
    });
  }

  changeFov(start, end) {
    this.fov.current = (1 - 0.1) * start + 0.1 * end;
    this.camera.fov = this.fov.current;
    this.camera.updateProjectionMatrix();
  }

  changePortalFov(start, end) {
    this.fov.current = (1 - 0.07) * start + 0.07 * end;
    this.camera.fov = this.fov.current;
    this.camera.updateProjectionMatrix();
  }

  checkFov() {
    if (this.fov.isChanging) {
      if (this.fov.isAccelerate) {
        this.changeFov(this.fov.current, this.fov.accel);
      }
      if (this.fov.isDecelerate) {
        this.changeFov(this.fov.current, this.fov.base);
      }
    }
    if (this.fov.isPortal) {
      if (this.fov.isAccelerate) {
        this.changePortalFov(this.fov.current, this.fov.portal);
      }
      if (this.fov.isDecelerate) {
        this.changeFov(this.fov.current, this.fov.base);
      }
    }
  }

  restart(indexMap: number) {
    this.layer = indexMap;
    this.scene = new Scene();

    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass();
    bloomPass.strength = 0.4;
    bloomPass.radius = 0.5;
    this.composer.addPass(bloomPass);

    const outputPass = new OutputPass();
    this.composer.addPass(outputPass);

    restartTime();
    beginGame();
    this.setup();
  }

  stop() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    this.environment = null;
    this.character = null;
    this.meshs = [];
  }

  addChildren() {
    for (let i = 0; i < this.meshs.length; i++) {
      this.scene.add(this.meshs[i].mesh);
    }
  }

  tickChildren() {
    for (let i = 0; i < this.meshs.length; i++) {
      this.meshs[i].tick(this);
    }
  }

  setView() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    this.renderer.setPixelRatio(this.pixelRatio);
  }

  moveVision(event) {
    const horizontalMovement = event.movementX;
    const verticalMovement = event.movementY;

    this.camera.rotation.reorder("YXZ");
    this.camera.rotation.y -= horizontalMovement * this.sensitivity;
    this.camera.rotation.x -= verticalMovement * (this.sensitivity / 2);
    this.camera.rotation.x = Math.min(
      Math.max(this.camera.rotation.x, -Math.PI * 0.5),
      Math.PI * 0.5
    );
  }

  showEndGame(state: string) {
    state === "win" ? manageWin(true) : manageWin(false);
    redoGame();
    manageEndgame();
  }

  cleanUselessBullets() {
    console.log({
      "meshs": this.meshs,
      "scene": this.scene
    })
  }

  enablePointerLock() {
    document.body.requestPointerLock();

    document.addEventListener("mousemove", this.handleMouseMove);
    document.addEventListener("click", () => {
      this.character?.weaponEffect();
      this.character?.createBullet();
    });
  }

  disablePointerLock() {
    document.exitPointerLock();

    document.removeEventListener("mousemove", this.handleMouseMove);
  }

  handleMouseMove = (event: MouseEvent) => {
    this.moveVision(event);
  };

  registerEventListeners() {
    window.onresize = () => {
      this.setView();
    };
    window.addEventListener("mousemove", (e) => {
      this.mousePos = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener("finishLevel", () => {
      this.stop();
      this.disablePointerLock();
      this.showEndGame("win");
    });
    window.addEventListener("loseGame", () => {
      this.stop();
      this.disablePointerLock();
      this.showEndGame("lose");
    });
  }
}
