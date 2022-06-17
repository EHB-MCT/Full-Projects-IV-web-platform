import { Loader } from "@react-three/drei";
import React, { Suspense, useState } from "react";
import { Route } from "react-router-dom";
import { Canvas } from "react-three-fiber";
import { Scene } from ".";
import { Preview } from "./Preview";

export const Map = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [preview, setPreview] = useState<React.ReactNode>(<div></div>);
  return (
    <div className="map">
      {showPreview && <Preview>{preview}</Preview>}
      <Canvas
        className="map__canvas"
        camera={{ position: [600, 300, 200], far: 5000 }}
      >
        <Suspense fallback={null}>
          <Scene setPreview={setPreview} setShowPreview={setShowPreview} />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
};
