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
    enabled: false,
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
    enabled: false,
    offset: 1,
    darkness: 0.5,
  },
  sepia: {
    enabled: false,
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

mapView.setTheme("resources/theme.json");
mapView.loadPostEffects("resources/post-effects-streets.json");
mapView.loadPostEffects("resources/post-effects-outline.json");
