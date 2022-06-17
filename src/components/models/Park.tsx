import { useRef } from "react";
import { useLoader } from "react-three-fiber";
import * as THREE from "three";
import PalmTree1 from "./PalmTree1";
import PalmTree2 from "./PalmTree2";
import img from "../../assets/img/gras.jpg";
import WaterFountain from "./WaterFountain";
import Bench from "./Bench";
import Pavement from "./Pavement";
import Bush from "./Bush";
import Hedge from "./Hedge";

export const Park = ({ ...props }: JSX.IntrinsicElements["group"]) => {
  const ref = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, img);
  return (
    <group ref={ref} {...props}>
      <group scale={[1, 0.5, 1]} position={[200, 0, 450]}>
        <mesh position={[0, -0.5, 0]}>
          <boxBufferGeometry attach={"geometry"} args={[100, 1, 100]} />
          <meshBasicMaterial attach="material" map={texture} />
        </mesh>
      </group>
      <group scale={[1, 0.5, 1]} position={[200, 0, 350]}>
        <mesh position={[0, -0.5, 0]}>
          <boxBufferGeometry attach={"geometry"} args={[100, 1, 100]} />
          <meshBasicMaterial attach="material" map={texture} />
        </mesh>
      </group>
      <group scale={[1, 0.5, 1]} position={[200, 0, 550]}>
        <mesh position={[0, -0.5, 0]}>
          <boxBufferGeometry attach={"geometry"} args={[100, 1, 100]} />
          <meshBasicMaterial attach="material" map={texture} />
        </mesh>
      </group>
      <group scale={[1, 0.5, 1]} position={[200, 0, 650]}>
        <mesh position={[0, -0.5, 0]}>
          <boxBufferGeometry attach={"geometry"} args={[100, 1, 100]} />
          <meshBasicMaterial attach="material" map={texture} />
        </mesh>
      </group>
      <Pavement
        rotation={[-Math.PI / 85, -Math.PI / 35, 0]}
        scale={10}
        position={[200, 0.6, 669]}
      />
      <group>
        <Bench
          scale={7.5}
          rotation={[0, -Math.PI / 2, 0]}
          position={[210, 3.4, 670]}
        />
        <Bush
          rotation={[0, (Math.PI / Math.random()) * 10, 0]}
          scale={0.05}
          position={[215, 1, 660]}
        />
        <Bush
          rotation={[0, (Math.PI / Math.random()) * 10, 0]}
          scale={0.05}
          position={[215, 1, 680]}
        />
        <Hedge
          scale={0.1}
          position={[210, -1, 690]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <Hedge scale={0.1} position={[215, -1, 685]} />
        <Hedge scale={0.1} position={[215, -1, 655]} />
        <Hedge
          scale={0.1}
          position={[220, -1, 680]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <Hedge
          scale={0.1}
          position={[220, -1, 670]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <Hedge
          scale={0.1}
          position={[220, -1, 660]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <Hedge
          scale={0.1}
          position={[210, -1, 650]}
          rotation={[0, Math.PI / 2, 0]}
        />
      </group>
      <group position={[400, 0, 1340]} rotation={[0, Math.PI, 0]}>
        <Bench
          scale={7.5}
          rotation={[0, -Math.PI / 2, 0]}
          position={[210, 3.4, 670]}
        />
        <Bush
          rotation={[0, (Math.PI / Math.random()) * 10, 0]}
          scale={0.05}
          position={[215, 1, 660]}
        />
        <Bush
          rotation={[0, (Math.PI / Math.random()) * 10, 0]}
          scale={0.05}
          position={[215, 1, 680]}
        />
        <Hedge
          scale={0.1}
          position={[210, -1, 690]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <Hedge scale={0.1} position={[215, -1, 685]} />
        <Hedge scale={0.1} position={[215, -1, 655]} />
        <Hedge
          scale={0.1}
          position={[220, -1, 680]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <Hedge
          scale={0.1}
          position={[220, -1, 670]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <Hedge
          scale={0.1}
          position={[220, -1, 660]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <Hedge
          scale={0.1}
          position={[210, -1, 650]}
          rotation={[0, Math.PI / 2, 0]}
        />
      </group>
      <WaterFountain scale={0.025} position={[200, 0, 500]} />
      <PalmTree1 position={[225, 0, 325]} scale={0.02} />
      <PalmTree2 position={[225, 0, 325]} scale={0.02} />
    </group>
  );
};
