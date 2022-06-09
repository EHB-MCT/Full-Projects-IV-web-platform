/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeoCoordinates } from "@here/harp-geoutils";

import { View } from "./View";

import * as THREE from "three";
import { MapAnchor } from "@here/harp-mapview";

const app = new View({
  canvas: document.getElementById("map") as HTMLCanvasElement,
});

const mapView = app.mapView;

// make map full-screen
mapView.resize(window.innerWidth, window.innerHeight);

// react on resize events from the browser.
window.addEventListener("resize", () => {
  mapView.resize(window.innerWidth, window.innerHeight);
});

// center the camera to New York
mapView.lookAt({
  target: new GeoCoordinates(50.847328669159126, 4.3511262681609235),
  zoomLevel: 16,
  tilt: 30,
});

const options = {
  labels: false,
  toneMappingExposure: 1.0,
  outline: {
    enabled: true,
    ghostExtrudedPolygons: false,
    thickness: 0.004,
    color: "#898989",
  },
  bloom: {
    enabled: true,
    strength: 0.5,
    threshold: 0.9,
    radius: 1,
  },
  vignette: {
    enabled: true,
    offset: 1,
    darkness: 0.5,
  },
  sepia: {
    enabled: true,
    amount: 0.8,
  },
};

const updateRendering = () => {
  // snippet:effects_example.ts
  mapView.renderLabels = options.labels;
  mapView.renderer.toneMappingExposure = options.toneMappingExposure;
  mapView.mapRenderingManager.outline.enabled = options.outline.enabled;
  mapView.mapRenderingManager.updateOutline(options.outline);
  mapView.mapRenderingManager.bloom = options.bloom;
  mapView.mapRenderingManager.vignette = options.vignette;
  mapView.mapRenderingManager.sepia = options.sepia;
  // end:effects_example.ts
  mapView.update();
};

updateRendering();
// make sure the map is rendered
mapView.update();

const scale = 100;
const geometry = new THREE.BoxGeometry(1 * scale, 1 * scale, 1 * scale);
const prePassMaterial = new THREE.MeshStandardMaterial({
  color: "#ff00fe",
  opacity: 0.3,
  depthTest: false,
  transparent: true,
});
const material = new THREE.MeshStandardMaterial({
  color: "#ff00fe",
  opacity: 0.9,
  transparent: true,
});
function createPinkCube(): MapAnchor<THREE.Object3D> {
  // To avoid not seeing the cube at all if it is fully behind the buildings
  // and also to have some nice visuals if it is partially occluded we
  // render two passes:
  // 1. render the cube semi-transparent w/o depth test (renders entire cube)
  // 2. render the cube almost opaque w/ depth test (renders only un-occluded part)
  const cube = new THREE.Object3D();

  const prePassMesh = new THREE.Mesh(geometry, prePassMaterial);
  prePassMesh.renderOrder = Number.MAX_SAFE_INTEGER - 1;
  cube.add(prePassMesh);

  const mesh = new THREE.Mesh(geometry, material);
  mesh.renderOrder = Number.MAX_SAFE_INTEGER;
  cube.add(mesh);
  return cube;
}

const cube = createPinkCube();
cube.anchor = new GeoCoordinates(50.847328669159126, 4.3511262681609235);
console.log(cube);
