import {
  BoxGeometry,
  ShaderMaterial,
  Mesh,
  Box3,
  Vector3,
  PointLight,
  Matrix4,
} from "three";
import type { Engine } from "../engine";
import { layers } from "../data/layers/layers.ts";
import { settings } from "../../composables/handleSettings";

const { isSpeedrun } = settings();

export default class Character {
  mesh: Mesh;
  vecteur_mouvement: { x: number; y: number; z: number };
  speed: number;
  engine: Engine;
  boundingBox: Box3;
  light: PointLight;
  collideGround: boolean;
  canMove: boolean;
  accelerate: boolean;

  constructor(engine: Engine) {
    this.collideGround = true;
    this.canMove = false;
    this.speed = 1.5;
    this.mesh = new Mesh();
    this.engine = engine;
    this.createCharacter();
    this.getEventMove();
    this.vecteur_mouvement = { x: 0, y: 0, z: 0 };
    this.accelerate = false;
    this.boundingBox = new Box3();
    this.light = new PointLight(0xff00d4, 0.3, 4);
    this.mesh.add(this.light);
  }

  tick() {
    if (this.collideGround) {
      this.updateCameraPosition();
      this.updateBoundingBox();
      this.checkGroundCollision();
      if (this.canMove) {
        this.moveCharacter();
      }
    } else {
      this.finishLevel();
    }
  }

  createCharacter() {
    const { x, z } = layers[this.engine.layer].characterPlacement;
    const box = new BoxGeometry(0.2, 0.2, 0.2);
    const material = new ShaderMaterial({
      transparent: true,
      uniforms: {
        emissiveColor: { value: new Vector3(9, 4, 1) },
        uInstanceCount: { value: 40 },
      },
      vertexShader: `
      void main() {
        vec4 mPosition = modelMatrix * vec4( position, 1.0);
        #ifdef USE_INSTANCING
        mPosition = modelMatrix * instanceMatrix * vec4(position, 1.0);
        #endif
        gl_Position = projectionMatrix * viewMatrix * mPosition;
        }
        `,
      fragmentShader: `
        uniform vec3 emissiveColor;

        void main() {
          gl_FragColor = vec4(emissiveColor, 1.);
          }
          `,
    });

    const mesh = new Mesh(box, material);
    mesh.userData.typeOfBlock = "character";
    this.mesh.add(mesh);
    this.mesh.position.set(x - 11.5, 0, z - 11.5);
  }

  getEventMove() {
    window.addEventListener("keydown", (event) => {
      const key = event.key.toLowerCase();

      if (key == "z") this.vecteur_mouvement.z = 1;
      if (key == "s") this.vecteur_mouvement.z = -1;
      if (key == "d") this.vecteur_mouvement.x = 1;
      if (key == "q") this.vecteur_mouvement.x = -1;
    });

    window.addEventListener("keyup", (event) => {
      const key = event.key.toLowerCase();

      if (key === "z") this.vecteur_mouvement.z = 0;
      if (key === "q") this.vecteur_mouvement.x = 0;
      if (key === "s") this.vecteur_mouvement.z = 0;
      if (key === "d") this.vecteur_mouvement.x = 0;
    });
  }

  moveCharacter() {
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
        this.vecteur_mouvement.z * this.speed * this.engine.delta
      );
      anticipatedPosition.add(moveZ);
    }

    if (this.vecteur_mouvement.x !== 0) {
      const moveX = rightVector.multiplyScalar(
        this.vecteur_mouvement.x * this.speed * this.engine.delta
      );
      anticipatedPosition.add(moveX);
    }

    // Vérification des collisions
    if (!this.checkObstacleCollision(anticipatedPosition)) {
      newPosition.copy(anticipatedPosition);
    } else {
      if (this.vecteur_mouvement.z !== 0)
        this.correctPosition(anticipatedPosition, "z");
      if (this.vecteur_mouvement.x !== 0)
        this.correctPosition(anticipatedPosition, "x");
    }

    this.mesh.position.copy(newPosition);
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

  checkGroundCollision() {
    const characterBox = this.boundingBox;

    if (characterBox.intersectsBox(this.engine.environment.groundBoundingBox)) {
      this.collideGround = true;
    } else {
      this.collideGround = false;
    }
  }

  correctPosition(position: Vector3, axis: "x" | "z") {
    const characterBox = this.boundingBox.clone();
    characterBox.translate(position.clone().sub(this.mesh.position));

    for (const obstacleBox of this.engine.environment.boundingBoxes) {
      if (characterBox.intersectsBox(obstacleBox)) {
        if (axis === "z") {
          if (this.vecteur_mouvement.z > 0) {
            // avance
            position.z = Math.min(
              position.z,
              obstacleBox.min.z - this.boundingBox.max.z
            );
          } else if (this.vecteur_mouvement.z < 0) {
            // recule
            position.z = Math.max(
              position.z,
              obstacleBox.max.z - this.boundingBox.min.z
            );
          }
        }

        if (axis === "x") {
          if (this.vecteur_mouvement.x > 0) {
            // droite
            position.x = Math.min(
              position.x,
              obstacleBox.min.x - this.boundingBox.max.x
            );
          } else if (this.vecteur_mouvement.x < 0) {
            // gauche
            position.x = Math.max(
              position.x,
              obstacleBox.max.x - this.boundingBox.min.x
            );
          }
        }
      }
    }

    if (axis === "z") {
      this.mesh.position.z = position.z;
    } else if (axis === "x") {
      this.mesh.position.x = position.x;
    }
  }

  updateCameraPosition() {
    this.engine.camera.position.x = this.mesh.position.x;
    this.engine.camera.position.y = this.mesh.position.y;
    this.engine.camera.position.z = this.mesh.position.z;
  }

  updateBoundingBox() {
    this.boundingBox.setFromObject(this.mesh);
    this.boundingBox.expandByScalar(-0.01);
  }

  finishLevel() {
    const finishSpeedrunLevel = new CustomEvent("finishSpeedrunLevel", {
      detail: "finishSpeedrunLevel",
    });
    const finishLevel = new CustomEvent("finishLevel", {
      detail: "finishLevel",
    });

    window.dispatchEvent(isSpeedrun.value ? finishSpeedrunLevel : finishLevel);
  }
}
