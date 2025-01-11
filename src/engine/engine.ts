import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Clock,
  AmbientLight,
  Quaternion,
  Euler,
  Vector3,
} from "three";

import { settings } from "../composables/handleSettings.ts";
import Environment from "./models/environment.ts";
import Character from "./models/character.ts";
import GUI from "lil-gui";
//import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const {
  chosenLevel,
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
  layer: number;
  clock: Clock;
  delta: number;
  elapsedTime: number;
  sensitivity: number;
  fov: {
    base: number;
    current: number;
    accel: number;
    isChanging: boolean;
    isAccelerate: boolean;
    isDecelerate: boolean;
  };

  constructor(ref: HTMLElement) {
    const { width, height } = ref.getBoundingClientRect();
    this.meshs = [];
    this.mousePos = { x: 0, y: 0 };
    this.ref = ref;
    this.scene = new Scene();
    this.fov = {
      base: 90,
      current: 90,
      accel: 110,
      isChanging: false,
      isAccelerate: false,
      isDecelerate: false,
    };
    this.camera = new PerspectiveCamera(this.fov.base, width / height, 0.1, 10);
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

    this.renderer.setClearColor(0, 0);
    this.renderer.setPixelRatio(this.pixelRatio);
    const resizeCanvas = window.devicePixelRatio > 1;
    this.renderer.setSize(width, height, resizeCanvas);
    //const light = new AmbientLight( 0x404040 ); // soft white light
    //this.scene.add( light );
    /*const controls = new OrbitControls( this.camera, this.renderer.domElement );
    controls.update();*/
    ref.appendChild(this.renderer.domElement);
    this.setup();
  }

  tick() {
    this.renderer.render(this.scene, this.camera);

    this.animationFrameId = requestAnimationFrame(() => {
      this.tick();
      this.delta = this.clock.getDelta();
      this.elapsedTime = this.clock.getElapsedTime();
      this.checkFov();
      this.tickChildren();
    });
  }

  setup() {
    this.environment = new Environment(this);
    this.character = new Character(this);
    this.meshs.push(this.environment, this.character);
    this.addChildren();
    this.setupGUI();
    this.setView();
    this.registerEventListeners();
    this.tick();
    setTimeout(() => {
      this.character.canMove = true;
    }, 100);
  }

  changeFov(start, end) {
    this.fov.current = (1 - 0.1) * start + 0.1 * end;
    this.camera.fov = this.fov.current;
    this.camera.updateProjectionMatrix();
  }

  setupGUI() {
    const gui = new GUI({ title: "Acker'tools", closeFolders: true });
    const sceneGUI = gui.addFolder("Environment");
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

    window.addEventListener("keydown", (e) => {
      if (e.key == "t") gui.show(gui._hidden);
    });
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
  }

  restart(indexMap: number) {
    this.layer = indexMap;
    this.scene = new Scene();
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
    let lastXRotation = this.camera.rotation.x;

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

  enablePointerLock() {
    document.body.requestPointerLock();

    document.addEventListener("mousemove", this.handleMouseMove);
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
