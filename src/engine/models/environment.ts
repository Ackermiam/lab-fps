import {
  BoxGeometry,
  MeshPhongMaterial,
  Mesh,
  Box3,
  TextureLoader,
  SRGBColorSpace,
  LoadingManager,
} from "three";
import type { Engine } from "../engine";
import { layers } from "../data/layers/layers.ts";

import walltexture from "../../assets/textures/texturewall.png"

export default class Environment {
  mesh: any;
  meshsPlacement: any[];
  boundingBoxes: any[];
  groundBoundingBox: any;
  engine: Engine;
  texture: Record<string, any>;
  loadingManager: LoadingManager;

  constructor(engine: Engine) {
    this.loadingManager = new LoadingManager();
    this.texture = new TextureLoader(this.loadingManager).load(
      walltexture
    );
    this.texture.colorSpace = SRGBColorSpace;
    this.mesh = new Mesh();
    this.meshsPlacement = [];
    this.boundingBoxes = [];
    this.engine = engine;
    this.setEnvironment();
  }

  tick() {}
  setEnvironment() {
    this.createGround();
    this.createLevelPlacement();
    this.createLevel();
  }

  createBlock(xPos: number, zPos: number) {
    const box = new BoxGeometry(1, 4, 1);
    const material = new MeshPhongMaterial({
      map: this.texture,
      specular: 0x008a6e,
      shininess: 3,
    });
    const mesh = new Mesh(box, material);
    mesh.position.set(xPos, 0, zPos);
    mesh.userData.typeOfBlock = "obstacle";
    const boundingBox = new Box3().setFromObject(mesh);
    this.boundingBoxes.push(boundingBox);
    this.mesh.add(mesh);
  }

  createGround() {
    const box = new BoxGeometry(24, 0.5, 24);
    const material = new MeshPhongMaterial({
      color: 0x777777,
      specular: 0x00ffcc,
    });
    const mesh = new Mesh(box, material);
    this.groundBoundingBox = new Box3().setFromObject(mesh);
    mesh.userData.typeOfBlock = "ground";
    mesh.position.y = -0.75;
    this.mesh.add(mesh);
  }

  createLevelPlacement() {
    layers[this.engine.layer].level.forEach((item) => {
      const cubePos = {
        x: item.x,
        z: item.z,
      };
      this.meshsPlacement.push(cubePos);
    });
  }

  createLevel() {
    this.meshsPlacement.forEach((item) => {
      this.createBlock(item.x - 11.5, item.z - 11.5);
    });
  }
}
