import {
  BoxGeometry,
  MeshPhongMaterial,
  Mesh,
  Box3,
  Vector3,
  PointLight,
  Matrix4,
} from "three";
import type { Engine } from "../engine";
import { layers } from "../data/layers/layers.ts";
import Bullet from "./bullet.ts";

export default class Character {
  mesh: Mesh;
  vecteur_mouvement: { x: number; y: number; z: number };
  speed: number;
  engine: Engine;
  boundingBox: Box3;
  light: PointLight;
  secondLight: PointLight;
  collideGround: boolean;
  canMove: boolean;
  accelerate: number;
  gun: any;
  isTp: boolean;
  bullets: any[];
  life: number;
  stockBullets: number;

  constructor(engine: Engine) {
    this.stockBullets = 300;
    this.life = 50;
    this.bullets = [];
    this.collideGround = true;
    this.isTp = false;
    this.gun = this.canMove = false;
    this.speed = 1.5;
    this.mesh = new Mesh();
    this.engine = engine;
    this.createCharacter();
    this.getEventMove();
    this.vecteur_mouvement = { x: 0, y: 0, z: 0 };
    this.accelerate = 1;
    this.boundingBox = new Box3();
    this.light = new PointLight(0xff615c, 1, 7);
    this.secondLight = new PointLight(0xffffff, 2, 20);
    this.light.position.y = 0.8;
    this.secondLight.position.y = 1.5;
    this.mesh.add(this.light);
    this.mesh.add(this.secondLight);
  }

  tick() {
    if (this.collideGround) {
      this.updateCameraPosition();
      this.moveLight();
      this.updateBoundingBox();
      this.checkGroundCollision();
      this.checkBulletCollision();
      if (this.canMove) {
        this.moveCharacter();
      }
    } else {
      this.finishLevel();
    }
  }

  createCharacter() {
    const { x, z } = layers[this.engine.layer].characterPlacement;
    const box = new BoxGeometry(0.4, 0.2, 0.4);
    const material = new MeshPhongMaterial({ visible: false });

    const mesh = new Mesh(box, material);
    mesh.userData.typeOfBlock = "character";
    this.mesh.add(mesh);
    this.mesh.position.set(x - 11.5, 0, z - 11.5);
  }

  rotateCharacter(vRotate: number) {
    this.mesh.rotation.y -= vRotate;
  }

  getEventMove() {
    window.addEventListener("keydown", (event) => {
      const key = event.key.toLowerCase();

      if (key == "z") this.vecteur_mouvement.z = 1;
      if (key == "s") this.vecteur_mouvement.z = -1;
      if (key == "d") this.vecteur_mouvement.x = 1;
      if (key == "q") this.vecteur_mouvement.x = -1;
      if (key == "shift") {
        this.accelerate = 1.5;
        this.engine.fov.isChanging = true;
        this.engine.fov.isAccelerate = true;
        this.engine.fov.isDecelerate = false;
      }
    });

    window.addEventListener("keyup", (event) => {
      const key = event.key.toLowerCase();

      if (key === "z") this.vecteur_mouvement.z = 0;
      if (key === "q") this.vecteur_mouvement.x = 0;
      if (key === "s") this.vecteur_mouvement.z = 0;
      if (key === "d") this.vecteur_mouvement.x = 0;
      if (key == "shift") {
        this.accelerate = 1;
        this.engine.fov.isChanging = true;
        this.engine.fov.isAccelerate = false;
        this.engine.fov.isDecelerate = true;
      }
    });
  }

  moveLight() {
    this.light.position.y = Math.cos(this.engine.elapsedTime * 2) / 3 + 0.5;
  }

  moveCharacter() {
    const previousPosition = this.mesh.position.clone();
    const anticipatedPosition = this.mesh.position.clone();
    let newPosition = this.mesh.position.clone();

    // Matrice de rotation de la caméra
    const cameraMatrix = new Matrix4().extractRotation(
      this.engine.camera.matrix
    );
    const forwardVector = new Vector3(0, 0, -1).applyMatrix4(cameraMatrix); // Avant/arrière
    const rightVector = new Vector3(1, 0, 0).applyMatrix4(cameraMatrix); // Gauche/droite

    forwardVector.normalize();
    rightVector.normalize();

    if (this.vecteur_mouvement.z !== 0) {
      const moveZ = forwardVector.multiplyScalar(
        this.vecteur_mouvement.z *
          this.speed *
          this.accelerate *
          this.engine.delta
      );
      anticipatedPosition.add(moveZ);
    }

    if (this.vecteur_mouvement.x !== 0) {
      const moveX = rightVector.multiplyScalar(
        this.vecteur_mouvement.x *
          this.speed *
          this.accelerate *
          this.engine.delta
      );
      anticipatedPosition.add(moveX);
    }

    this.checkTPCollision();

    if (this.isTp) {
      this.teleportCharacter();
    } else {
      if (!this.checkObstacleCollision(anticipatedPosition)) {
        newPosition.copy(anticipatedPosition);
      } else {
        if (this.vecteur_mouvement.z !== 0) newPosition.copy(previousPosition);
        if (this.vecteur_mouvement.x !== 0) newPosition.copy(previousPosition);
      }

      newPosition.y = 0;
      this.mesh.position.copy(newPosition);
    }
  }

  checkObstacleCollision(position: Vector3): boolean {
    const characterBox = this.boundingBox.clone();
    characterBox.translate(position.clone().sub(this.mesh.position)); // Simule le déplacement

    for (const obstacleBox of this.engine.environment.boundingBoxes) {
      if (characterBox.intersectsBox(obstacleBox)) {
        return true;
      }
    }

    return false;
  }

  checkBulletCollision() {
    for (let i = 0; i < this.bullets.length; i++) {
      const bulletBox = this.bullets[i].boundingBox.clone();
      for (let j = 0; j < this.engine.environment.boundingBoxes.length; j++) {
        if (bulletBox.intersectsBox(this.engine.environment.boundingBoxes[j])) {
          let id = this.bullets[i].mesh.uuid;
          this.engine.meshs = this.engine.meshs.filter(
            (meshObj) => meshObj.mesh.uuid !== id
          );
          this.engine.scene.children = this.engine.scene.children.filter(
            (child) => child.uuid !== id
          );
          this.bullets.splice(i, 1);
          break;
        }
      }
    }
  }

  checkGroundCollision() {
    const characterBox = this.boundingBox;

    if (characterBox.intersectsBox(this.engine.environment.groundBoundingBox)) {
      this.collideGround = true;
    } else {
      this.collideGround = false;
    }
  }

  checkTPCollision() {
    const characterBox = this.boundingBox.clone();

    for (const tpBox of this.engine.environment.tpBoundingBox) {
      if (characterBox.intersectsBox(tpBox)) {
        this.isTp = true;
        return true;
      }
    }
    this.isTp = false;
    return false;
  }

  teleportCharacter() {
    const xPos = Math.floor(Math.random() * 24);
    const zPos = Math.floor(Math.random() * 24);
    const newPosition = new Vector3(xPos - 11.5, 0, zPos - 11.5);
    let canITP = true;
    //valider la position
    this.engine.environment?.flashTPLight();
    this.canMove = false;
    this.engine.environment?.meshsPlacement.forEach((position) => {
      if (position.x === xPos && position.z === zPos) {
        canITP = false;
        this.teleportCharacter();
      }
    });

    if (canITP === true) {
      this.engine.fov.isChanging = false;
      this.engine.fov.isPortal = true;
      this.engine.fov.isAccelerate = true;
      this.engine.fov.isDecelerate = false;
      this.mesh.position.copy(newPosition);

      setTimeout(() => {
        this.engine.fov.isChanging = true;
        this.engine.fov.isAccelerate = false;
        this.engine.fov.isDecelerate = true;
        this.engine.environment?.stopFlashTPLight();
      }, 550);

      setTimeout(() => {
        this.engine.fov.isPortal = false;
        this.canMove = true;
      }, 750);
    }
  }

  createBullet() {
    const bulletPos = this.mesh.position.clone();
    const cameraMatrix = new Matrix4().extractRotation(
      this.engine.camera.matrix
    );
    const bullet = new Bullet(this.engine, bulletPos, cameraMatrix);

    this.bullets.push(bullet);
  }

  updateCameraPosition() {
    this.engine.camera.position.x = this.mesh.position.x;
    this.engine.camera.position.y = this.mesh.position.y + 0.2;
    this.engine.camera.position.z = this.mesh.position.z + 0.07;
  }

  updateBoundingBox() {
    this.boundingBox.setFromObject(this.mesh);
    this.boundingBox.expandByScalar(-0.01);
  }

  weaponEffect() {
    this.engine.composer.passes[1].strength = 1;
    setTimeout(() => {
      this.engine.composer.passes[1].strength = 0.4;
    }, 50);
  }

  finishLevel() {
    const finishLevel = new CustomEvent("finishLevel", {
      detail: "finishLevel",
    });

    window.dispatchEvent(finishLevel);
  }
}
