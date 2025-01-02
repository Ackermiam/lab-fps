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
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const { chosenLevel } = settings();

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

  constructor(ref: HTMLElement) {
    const { width, height } = ref.getBoundingClientRect();
    this.meshs = [];
    this.mousePos = { x: 0, y: 0 };
    this.ref = ref;
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(55, width / height);
    this.camera.position.set(0, 0, 0);
    this.camera.lookAt(0, 0, 0);
    this.layer = chosenLevel.value;
    this.clock = new Clock();
    this.delta = 0;
    this.mouseDirection = new Vector3(0, 0, 1);

    this.pixelRatio =
      width < 900
        ? Math.min(window.devicePixelRatio, 1.5)
        : window.devicePixelRatio;

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
      //this.moveVision()
      this.tickChildren();
    });
  }

  setup() {
    this.environment = new Environment(this);
    this.character = new Character(this);
    this.meshs.push(this.environment, this.character);
    this.addChildren();
    this.setView();
    this.registerEventListeners();
    this.tick();
    setTimeout(() => {
      this.character.canMove = true;
    }, 100);
  }

  restart(indexMap: number) {
    this.layer = indexMap;
    this.scene = new Scene();
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
  }

  moveVision(event) {
    const sensitivity = 0.002;
    const horizontalMovement = event.movementX;

    this.camera.rotation.y -= horizontalMovement * sensitivity;
  }

  enablePointerLock() {
    document.body.requestPointerLock();

    document.addEventListener("mousemove", (event) => {
      this.moveVision(event);
    });
  }

  registerEventListeners() {
    window.onresize = () => {
      this.setView();
    };
    window.addEventListener("mousemove", (e) => {
      this.mousePos = { x: e.clientX, y: e.clientY };
    });

    /*window.addEventListener("finishLevel", () => {
      this.stop();
    });
    window.addEventListener("finishSpeedrunLevel", () => {
      this.stop();
    });*/
  }
}
