import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';
import ThreeEvent from './node_modules/three-event/index.js';

class BasicWorldDemo {
  constructor() {
    this.clicked = false;
    this.cameraPos = [0, 100, 0];
    this.opacity = 1;
    this.cameraRotation = [Math.PI / -2, 0, 0];
    this.Initialize();
  }

  Initialize() {
    this.threejs = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    this.threejs.shadowMap.enabled = true;
    this.threejs.shadowMap.type = THREE.PCFSoftShadowMap;
    this.threejs.setPixelRatio(window.devicePixelRatio);
    this.threejs.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(this.threejs.domElement);

    window.addEventListener('resize', () => {
      this.OnWindowResize();
    }, false);

    const fov = 60;
    const aspect = 1920 / 1080;
    const near = 1.0;
    const far = 1000.0;
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this.camera.position.set(this.cameraPos[0], this.cameraPos[1], this.cameraPos[2]);

    this.scene = new THREE.Scene();

    this.controls = new OrbitControls(this.camera, this.threejs.domElement);
    this.controls.target.set(0, 0, 0);
    this.controls.enablePan = false;
    this.controls.enableZoom = false;
    this.controls.enableRotate = false;
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.10;
    this.controls.screenSpacePanning = false;

    let light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
    light.position.set(20, 100, 10);
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
    light.shadow.bias = -0.001;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 500.0;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500.0;
    light.shadow.camera.left = 100;
    light.shadow.camera.right = -100;
    light.shadow.camera.top = 100;
    light.shadow.camera.bottom = -100;
    this.scene.add(light);

    light = new THREE.AmbientLight(0xc9c9c9);
    this.scene.add(light);

    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 100, 10, 10),
      new THREE.MeshStandardMaterial({
        color: 0x4f4f4f,
      }));
    plane.castShadow = false;
    plane.receiveShadow = true;
    plane.rotation.x = -Math.PI / 2;
    this.scene.add(plane);

    this.box = new THREE.Mesh(
      new THREE.BoxGeometry(10, 20, 10),
      new THREE.MeshStandardMaterial({
        color: 0x6bd0ff,
      }));
    this.box.position.set(0, 10, 0);
    this.box.castShadow = true;
    this.box.receiveShadow = true;

    this.scene.add(this.box);

    this.threejs.setClearColor(0x000000, 0);


    const threeOnEvent = new ThreeEvent({
      domElement: this.threejs.domElement,
      camera: this.camera
    });

    let cursor = document.querySelector("body");
    // hover
    this.box.on('hover', (mesh, event) => {
      // On hover in
      mesh.material.color.setHex(0x0000ff);
      cursor.style.cursor = "pointer";

    }, (mesh, event) => {
      // On hover out
      mesh.material.color.setHex(0xffffff);
      cursor.style.cursor = "auto";
    });

    let content = document.getElementById("box-content");

    this.box.on('click', (mesh, event) => {
      console.log("click");
      if (this.clicked) {
        this.clicked = false;
        setTimeout(() => {
          content.style.display = "none";
        }, 0);

      } else {
        this.clicked = true;
        setTimeout(() => {
          content.style.display = "flex";
        }, 750);
      }
    });

    this.RAF();
  }

  OnWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.threejs.setSize(window.innerWidth, window.innerHeight);
  }

  RAF() {
    requestAnimationFrame(() => {

      this.threejs.render(this.scene, this.camera);

      if (this.clicked) {
        if (this.cameraPos[0] < 5 || this.cameraPos[1] > 30 || this.cameraPos[2] < 25 || this.cameraRotation[0] < Math.PI / -4) {
          this.cameraPos[0] = this.cameraPos[0] + 0.2;
          this.cameraPos[1] = this.cameraPos[1] - 0.6;
          this.cameraPos[2] = this.cameraPos[2] + 0.4;
          this.cameraRotation[0] = this.cameraRotation[0] + 0.01;
        }
      } else {
        if (this.cameraPos[0] > 5 || this.cameraPos[1] < 100 || this.cameraPos[2] > 25 || this.cameraRotation[0] > Math.PI / -2) {
          this.cameraPos[0] = this.cameraPos[0] - 0.2;
          this.cameraPos[1] = this.cameraPos[1] + 0.6;
          this.cameraPos[2] = this.cameraPos[2] - 0.4;
          this.cameraRotation[0] = this.cameraRotation[0] - 0.01;
        }
      }

      this.camera.rotation.set(this.cameraRotation[0], this.cameraRotation[1], this.cameraRotation[2]);
      this.camera.position.set(this.cameraPos[0], this.cameraPos[1], this.cameraPos[2]);

      this.RAF();

    });
  }
}


let APP = null;

window.addEventListener('DOMContentLoaded', () => {
  APP = new BasicWorldDemo();
});
