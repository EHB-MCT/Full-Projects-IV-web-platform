import { Loader } from "@react-three/drei";
import React, { Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Canvas } from "react-three-fiber";
import { Scene } from "../components";
import {
  EffectComposer,
  Bloom,
  Scanline,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { Vector2 } from "three";

export const Map = ({ ...props }) => {
  const [zoom, setZoom] = useState(1);
  useEffect(() => {
    if (window.innerWidth < 1100 && window.innerWidth > 850) {
      setZoom(0.6);
    } else if (window.innerWidth <= 850 && window.innerWidth > 500) {
      setZoom(0.4);
    } else if (window.innerWidth <= 500) {
      setZoom(0.2);
    } else {
      setZoom(1);
    }
  }, []);
  return (
    <div className="map">
      <Canvas
        className="map__canvas"
        shadows
        camera={{
          position: [900, 400, 900],
          far: 5000,
          fov: 45,
          zoom: zoom,
          near: 1,
        }}
        //@ts-ignore
        mode="concurrent"
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            height={500}
            opacity={3}
          />
          <Scanline density={2} />
          <ChromaticAberration offset={new Vector2(0.001, 0.002)} />
        </EffectComposer>
      </Canvas>
      <Link to="/showroom">Go To Showroom</Link>

      <Loader />
    </div>
  );
};
