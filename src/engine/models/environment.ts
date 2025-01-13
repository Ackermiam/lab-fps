import {
  BoxGeometry,
  CylinderGeometry,
  MeshPhongMaterial,
  Mesh,
  Box3,
  TextureLoader,
  SRGBColorSpace,
  LoadingManager,
  Vector2,
  RepeatWrapping,
  PointLight,
  Group
} from "three";
import type { Engine } from "../engine";
import { layers } from "../data/layers/layers.ts";

import walltexture from "../../assets/textures/texturewall.png";
import normaltexture from "../../assets/textures/texturewallspecular.png";
import displacementtexture from "../../assets/textures/displacementwall.jpg";
import groundtexture from "../../assets/textures/groundtexture.jpg";
import noisetexture from "../../assets/textures/perlin.png";
import noisecontrastedtexture from "../../assets/textures/perlin-high-contrast.png";


export default class Environment {
  mesh: any;
  meshsPlacement: any[];
  boundingBoxes: any[];
  groundBoundingBox: any;
  tpBoundingBox: any[];
  engine: Engine;
  textureLoader: TextureLoader;
  texture: Record<string, any>;
  normalTexture: Record<string, any>;
  displacementTexture: Record<string, any>;
  textureGround: Record<string, any>;
  noisetexture: Record<string, any>;
  noisehightexture: Record<string, any>;
  loadingManager: LoadingManager;
  tpLight: any[];

  constructor(engine: Engine) {
    this.tpLight = [];
    this.loadingManager = new LoadingManager();
    this.textureLoader = new TextureLoader(this.loadingManager);
    this.texture = this.textureLoader.load(walltexture);
    this.normalTexture = this.textureLoader.load(normaltexture);
    this.displacementTexture = this.textureLoader.load(displacementtexture);
    this.textureGround = this.textureLoader.load(groundtexture);
    this.textureGround.wrapT = RepeatWrapping;
    this.textureGround.wrapS = RepeatWrapping;
    this.textureGround.repeat = new Vector2(35, 35);
    this.texture.colorSpace = SRGBColorSpace;
    this.noisetexture = this.textureLoader.load(noisetexture)
    this.noisetexture.wrapT = RepeatWrapping;
    this.noisetexture.wrapS = RepeatWrapping;
    this.noisetexture.repeat = new Vector2(35, 35);
    this.noisehightexture = this.textureLoader.load(noisecontrastedtexture)
    this.noisehightexture.wrapT = RepeatWrapping;
    this.noisehightexture.wrapS = RepeatWrapping;
    this.noisehightexture.repeat = new Vector2(35, 35);
    this.mesh = new Mesh();
    this.meshsPlacement = [];
    this.boundingBoxes = [];
    this.tpBoundingBox = [];
    this.engine = engine;
    this.setEnvironment();
  }

  tick() {
    if(this.tpBoundingBox.length > 0) this.moveTP();
  }
  setEnvironment() {
    this.createGround();
    this.createLevelPlacement();
    this.createLevel();
  }

  createBlock(xPos: number, zPos: number) {
    const box = new BoxGeometry(1, 4, 1, 40, 40);
    const material = new MeshPhongMaterial({
      map: this.texture,
      normalMap: this.normalTexture,
      specular: 0x0e2f29,
      shininess: 20,
      normalScale: new Vector2(0.66, 0.66),
      displacementMap: this.displacementTexture,
      displacementScale: 0.035,
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
      specular: 0x083a32,
      map: this.textureGround,
    });
    const mesh = new Mesh(box, material);
    this.groundBoundingBox = new Box3().setFromObject(mesh);
    mesh.userData.typeOfBlock = "ground";
    mesh.position.y = -0.75;
    this.mesh.add(mesh);
  }

  createTP(xPos: number, zPos: number) {
    const box = new CylinderGeometry(.8, .5, 20, 25, 50);
    const material = new MeshPhongMaterial({
      color: 0xffffff,
      displacementMap: this.noisetexture,
      alphaMap: this.noisehightexture,
      emissive: 0xca6de3,
      shininess: 30,
      transparent: true,
      opacity: 0.5
    });
    const group = new Group();
    const light = new PointLight(0xfd70ff, 4, 20, 3);
    const mesh = new Mesh(box, material);
    mesh.position.set(xPos, 9, zPos);
    light.position.set(xPos + 0.1, 1, zPos +0.1);
    mesh.userData.typeOfBlock = "tp";
    const boundingBox = new Box3().setFromObject(mesh);
    this.tpBoundingBox.push(boundingBox);
    group.add(mesh, light);
    this.tpLight.push(group);
    this.mesh.add(group);
  }

  moveTP() {
    this.tpLight.forEach(light => {
      light.children[0].rotation.y = this.engine.elapsedTime * 3;
      light.children[0].position.y = Math.cos(this.engine.elapsedTime) / 3 + 0.5;
      light.children[1].intensity = Math.cos(this.engine.elapsedTime * 2) + 4;
    })
    /*this.tpLight.children[0].rotation.y += 0.005;
    this.tpLight.children[0].position.y = Math.cos(this.engine.elapsedTime) / 3 + 0.5;
    this.tpLight.children[1].intensity = Math.cos(this.engine.elapsedTime * 2) + 4*/
  }

  createLevelPlacement() {
    layers[this.engine.layer].level.forEach((item) => {
      const cubePos = {
        x: item.x,
        z: item.z,
        type: "wall",
      };
      this.meshsPlacement.push(cubePos);
    });
    layers[this.engine.layer].tpPlacement?.forEach((item) => {
      const tpPos = {
        x: item.x,
        z: item.z,
        type: "tp",
      };
      this.meshsPlacement.push(tpPos);
    });
  }

  createLevel() {
    this.meshsPlacement.forEach((item) => {
      item.type === "tp"
        ? this.createTP(item.x - 11.5, item.z - 11.5)
        : this.createBlock(item.x - 11.5, item.z - 11.5)
    });
  }
}
