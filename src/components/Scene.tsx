import { OrbitControls, PresentationControls } from "@react-three/drei";
import gsap, { Power3, Power4 } from "gsap/all";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ThreeEvent, useThree, Vector3 } from "react-three-fiber";
import * as THREE from "three";
import { MeshLambertMaterial } from "three";
import { Topography } from "./models";
import { Hotel } from "./models/Buildings/Hotel";

const Box = () => {
    return (
        <mesh position={[0, 0, 0]}>
            <boxBufferGeometry attach={"geometry"} args={[5, 5, 5]} />
            <meshLambertMaterial attach={"material"} color={"white"} />
        </mesh>
    );
};

type SceneProps = {
    setPreview: Dispatch<SetStateAction<React.ReactNode>>;
    setShowPreview: Dispatch<SetStateAction<boolean>>;
};

export const Scene = ({ setPreview, setShowPreview }: SceneProps) => {
    const { camera } = useThree();
    const [enableOrbit, setEnableOrbit] = useState(true);
    const [currentTarget, setCurrentTarget] = useState<Vector3>([0, 0, 0]);
    const [minDistance, setMinDistance] = useState(700);
    const [hasAnimated, setHasAnimated] = useState(false);

    return (
        <>
            <OrbitControls
                // minDistance={minDistance}
                enabled={enableOrbit}
                enableZoom={true}
                target={currentTarget}
                // minPolarAngle={-Math.PI / 3}
                // maxPolarAngle={Math.PI / 2}
                // minAzimuthAngle={-Math.PI / 3}
                // maxAzimuthAngle={Math.PI / 3}
            />
            <spotLight intensity={0.4} color="white" position={[20, 20, 0]} />
            <ambientLight intensity={0.4} />
            {/* <gridHelper
                args={[100, 100, "blue", "blue"]}
                onClick={(e) => console.log(e)}
            /> */}
            <Hotel
                scale={3}
                rotation={[0, -Math.PI / 2, 0]}
                position={[-100, 20, 100]}
            />

            {/* <group rotation={[0, Math.PI, 0]}>
                <Toyota
                    scale={0.1}
                    rotation={[0, Math.PI, 0]}
                    position={[0, 0, 0]}
                />
                <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <planeBufferGeometry args={[500, 500]} />
                    <meshLambertMaterial color="green" />
                </mesh>
                <mesh position={[20, 5, 40]} castShadow receiveShadow>
                    <boxBufferGeometry args={[10, 10, 10]} />
                    <meshLambertMaterial color="red" />
                </mesh>
                <mesh position={[-20, 5, 40]} castShadow receiveShadow>
                    <boxBufferGeometry args={[10, 10, 10]} />
                    <meshLambertMaterial color="red" />
                </mesh>
                <mesh position={[0, 5, 40]} castShadow receiveShadow>
                    <boxBufferGeometry args={[10, 10, 10]} />
                    <meshLambertMaterial color="red" />
                </mesh>
                <mesh position={[20, 5, 60]} castShadow receiveShadow>
                    <boxBufferGeometry args={[10, 10, 10]} />
                    <meshLambertMaterial color="red" />
                </mesh>
                <mesh position={[-20, 5, 60]} castShadow receiveShadow>
                    <boxBufferGeometry args={[10, 10, 10]} />
                    <meshLambertMaterial color="red" />
                </mesh>
                <mesh position={[0, 5, 60]} castShadow receiveShadow>
                    <boxBufferGeometry args={[10, 10, 10]} />
                    <meshLambertMaterial color="red" />
                </mesh> */}
            {/* // <Isopotamia scale={20} /> */}
            {/* <StreetLight scale={20} /> */}
            <Topography rotation={[0, Math.PI, 0]} position={[300, 0, 400]} />
            {/* </group> */}
        </>
    );
};
