import {
  SphereGeometry,
  MeshPhongMaterial,
  Mesh,
  Box3,
  Vector3,
  Matrix4,
} from "three";
import type { Engine } from "../engine";

export default class Bullet {
  mesh: Mesh;
  position: Vector3;
  direction: Matrix4;
  speed: number;
  boundingBox: Box3;
  engine: Engine;

  constructor(engine: Engine, pos: Vector3, dir: Matrix4) {
    this.boundingBox = new Box3();
    this.position = new Vector3(0, 0, 0);
    this.direction = new Matrix4();
    this.mesh = new Mesh();
    this.engine = engine;
    this.speed = 1;
    this.setupBullet(engine, pos, dir);
  }

  tick() {
    this.move();
    this.updateBoundingBox();
  }

  setupBullet(engine: Engine, pos: Vector3, direction: Matrix4) {
    const geometry = new SphereGeometry(0.005, 15, 8);
    const material = new MeshPhongMaterial({
      color: "#00fff2",
      emissive: "#00fff2",
    });
    const mesh = new Mesh(geometry, material);
    this.position = new Vector3(pos.x, pos.y + 0.1, pos.z);
    this.direction = direction;
    mesh.position.set(this.position.x, this.position.y, this.position.z);

    this.mesh.add(mesh);
    engine.scene.add(this.mesh);
    engine.meshs.push(this);
  }

  move() {
    const forwardVector = new Vector3(0, 0, -1).applyMatrix4(this.direction);
    forwardVector.normalize();

    const moveZ = forwardVector.multiplyScalar(this.engine.delta * 10);

    this.mesh.position.add(moveZ);
  }

  updateBoundingBox() {
    this.boundingBox.setFromObject(this.mesh);
    this.boundingBox.expandByScalar(-0.01);
  }
}
