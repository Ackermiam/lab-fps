import {
  IcosahedronGeometry,
  MeshPhongMaterial,
  Mesh,
  Box3,
  PointLight,
  TextureLoader,
  SRGBColorSpace,
  LoadingManager,
} from "three";
import type { Engine } from "../engine";

import groundtexture from "../../assets/textures/groundtexture.jpg";

export default class Enemy {
  mesh: Mesh;
  vecteur_mouvement: { x: number; y: number; z: number };
  speed: number;
  engine: Engine;
  boundingBox: Box3;
  light: PointLight;
  textureLoader: TextureLoader;
  texture: Record<string, any>;
  loadingManager: LoadingManager;
  life: number;

  constructor(engine: Engine) {
    this.life = 50;
    this.loadingManager = new LoadingManager();
    this.textureLoader = new TextureLoader(this.loadingManager);
    this.texture = this.textureLoader.load(groundtexture);
    this.texture.colorSpace = SRGBColorSpace;
    this.speed = 1.5;
    this.mesh = new Mesh();
    this.engine = engine;
    this.createEnemy();
    this.vecteur_mouvement = { x: 0, y: 0, z: 0 };
    this.boundingBox = new Box3();
    this.light = new PointLight(0xaa0000, 1.5, 1);
    this.mesh.add(this.light);
  }

  tick() {
    this.moveEnemy();
  }

  createEnemy() {
    const box = new IcosahedronGeometry(0.1, 0);
    const material = new MeshPhongMaterial({
      color: 0xff0000,
      displacementMap: this.texture,
      displacementScale: 0.035,
    });
    const mesh = new Mesh(box, material);
    mesh.userData.typeOfBlock = "enemy";
    this.mesh.add(mesh);
    this.mesh.position.set(0, 2, 0);
  }

  moveEnemy() {
    this.mesh.rotation.y = this.engine.elapsedTime;
    this.mesh.position.y = Math.cos(this.engine.elapsedTime * 2) / 4 + 0.3;
    this.moveTransition(
      this.mesh.position,
      this.engine.character?.mesh.position
    );
  }

  moveTransition(start, end) {
    this.mesh.position.x = (1 - 0.002) * start.x + 0.002 * end.x;
    this.mesh.position.z = (1 - 0.002) * start.z + 0.002 * end.z;
  }

  /*updateBoundingBox() {
    this.boundingBox.setFromObject(this.mesh);
    this.boundingBox.expandByScalar(-0.01);
  }*/
}
