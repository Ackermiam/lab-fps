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
import { settings } from "../../composables/handleSettings";

import groundtexture from "../../assets/textures/groundtexture.jpg";
const { randomPlace, enemies } = settings();

export default class Enemy {
  mesh: Mesh;
  engine: Engine;
  boundingBox: Box3;
  light: PointLight;
  textureLoader: TextureLoader;
  texture: Record<string, any>;
  loadingManager: LoadingManager;
  life: number;
  destination: {
    x: number;
    z: number;
  };

  constructor(engine: Engine, life: number) {
    this.destination = {
      x: randomPlace(),
      z: randomPlace(),
    };
    this.life = life;
    this.loadingManager = new LoadingManager();
    this.textureLoader = new TextureLoader(this.loadingManager);
    this.texture = this.textureLoader.load(groundtexture);
    this.texture.colorSpace = SRGBColorSpace;
    this.mesh = new Mesh();
    this.engine = engine;
    this.createEnemy();
    this.boundingBox = new Box3();
    this.light = new PointLight(0xaa0000, 1.5, 1);
    this.mesh.add(this.light);
    setInterval(() => {
      this.destination = {
        x: randomPlace(),
        z: randomPlace(),
      };
    }, 10000);
  }

  tick() {
    this.moveEnemy();
    this.updateBoundingBox();
    this.checkBulletCollision();
  }

  createEnemy() {
    const xPos = randomPlace();
    const zPos = randomPlace();
    const box = new IcosahedronGeometry(0.1, 0);
    const material = new MeshPhongMaterial({
      color: 0xff0000,
      displacementMap: this.texture,
      displacementScale: 0.005,
    });
    const mesh = new Mesh(box, material);
    mesh.userData.typeOfBlock = "enemy";
    this.mesh.add(mesh);
    this.mesh.position.set(xPos, 2, zPos);
  }

  moveEnemy() {
    this.mesh.rotation.y = this.engine.elapsedTime;
    this.mesh.position.y = Math.cos(this.engine.elapsedTime * 2) / 4 + 0.3;
    this.moveTransition(this.mesh.position, this.destination);
  }

  moveTransition(start, end) {
    this.mesh.position.x = (1 - 0.002) * start.x + 0.002 * end.x;
    this.mesh.position.z = (1 - 0.002) * start.z + 0.002 * end.z;
  }

  updateBoundingBox() {
    this.boundingBox.setFromObject(this.mesh);
    this.boundingBox.expandByScalar(0.02);
  }

  checkBulletCollision() {
    for (let i = 0; i < this.engine.character.bullets.length; i++) {
      const bulletBox = this.engine.character.bullets[i].boundingBox.clone();

      if (bulletBox.intersectsBox(this.boundingBox)) {
        this.life -= 10;
        this.light.intensity = 80;
        this.mesh.children[0].material.emissive.setHex(0xff0000);
        setTimeout(() => {
          this.light.intensity = 1.5;
          this.mesh.children[0].material.emissive.setHex(0x000000);
        }, 100);
        if (this.life <= 0) {
          let id = this.mesh.uuid;
          enemies.value.splice(0, 1)
          this.engine.meshs = this.engine.meshs.filter(
            (meshObj) => meshObj.mesh.uuid !== id
          );
          this.engine.scene.children = this.engine.scene.children.filter(
            (child) => child.uuid !== id
          );

          break;
        }
      }
    }
  }
}
