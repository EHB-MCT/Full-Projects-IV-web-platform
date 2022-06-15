/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: BrendanDouglas (https://sketchfab.com/BrendanDouglas)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/isopotamia-trophy-1d1d5712061e46caabca96b149ce9637
title: Isopotamia Trophy
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        Build_Mid_BG_Mat_BackGroundBuilings_0: THREE.Mesh;
        Build_Mid_Mid_Mat_HBuilding_0: THREE.Mesh;
        BASE_lambert1_0: THREE.Mesh;
        Build_L_BG_Mat_BackGroundBuilings_0: THREE.Mesh;
        SeaSideBuilding2_Mat_FrontBuildings_0: THREE.Mesh;
        SeaSideBuilding1_Mat_FrontBuildings_0: THREE.Mesh;
        Crane_Mat_FrontBuildings_0: THREE.Mesh;
        BalconyBuilding_Mat_FrontBuildings_0: THREE.Mesh;
        Blimp_Blimp1_0: THREE.Mesh;
        Build_Mid_FR_Building1_Accent2_0: THREE.Mesh;
        Build_Mid_FR_Glass3_0: THREE.Mesh;
        Build_Mid_FR_Alley_Track1_0: THREE.Mesh;
        Build_R_BG_Mat_BackGroundBuilings_0: THREE.Mesh;
    };
    materials: {
        Mat_BackGroundBuilings: THREE.MeshStandardMaterial;
        Mat_HBuilding: THREE.MeshStandardMaterial;
        lambert1: THREE.MeshStandardMaterial;
        Mat_FrontBuildings: THREE.MeshStandardMaterial;
        Blimp1: THREE.MeshStandardMaterial;
        Building1_Accent2: THREE.MeshStandardMaterial;
        Glass3: THREE.MeshStandardMaterial;
        Alley_Track1: THREE.MeshStandardMaterial;
    };
};

export function Isopotamia({ ...props }: JSX.IntrinsicElements["group"]) {
    const group = useRef<THREE.Group>(null);
    const { nodes, materials } = useGLTF(
        "/isopotamia_trophy/scene.gltf"
    ) as GLTFResult;
    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[14.77, 2.12, -1.74]} scale={0.02}>
                        <mesh
                            geometry={
                                nodes.Build_Mid_BG_Mat_BackGroundBuilings_0
                                    .geometry
                            }
                            material={materials.Mat_BackGroundBuilings}
                        />
                    </group>
                    <group position={[2.33, 0.05, 1.31]} scale={0.01}>
                        <mesh
                            geometry={
                                nodes.Build_Mid_Mid_Mat_HBuilding_0.geometry
                            }
                            material={materials.Mat_HBuilding}
                        />
                    </group>
                    <group position={[0, 0.11, 0]}>
                        <mesh
                            geometry={nodes.BASE_lambert1_0.geometry}
                            material={materials.lambert1}
                        />
                    </group>
                    <group
                        position={[-1.91, -6.18, -0.68]}
                        rotation={[0, 0.65, 0]}
                        scale={0.01}>
                        <mesh
                            geometry={
                                nodes.Build_L_BG_Mat_BackGroundBuilings_0
                                    .geometry
                            }
                            material={materials.Mat_BackGroundBuilings}
                        />
                    </group>
                    <group
                        position={[12.49, 0.75, 38.08]}
                        rotation={[0, -Math.PI / 2, 0]}
                        scale={0.01}>
                        <mesh
                            geometry={
                                nodes.SeaSideBuilding2_Mat_FrontBuildings_0
                                    .geometry
                            }
                            material={materials.Mat_FrontBuildings}
                        />
                    </group>
                    <group
                        position={[4.19, 0.75, 38.08]}
                        rotation={[0, -Math.PI / 2, 0]}
                        scale={0.01}>
                        <mesh
                            geometry={
                                nodes.SeaSideBuilding1_Mat_FrontBuildings_0
                                    .geometry
                            }
                            material={materials.Mat_FrontBuildings}
                        />
                    </group>
                    <group
                        position={[-21.62, 1.6, 46.31]}
                        rotation={[-Math.PI, -0.92, -Math.PI]}
                        scale={0.02}>
                        <mesh
                            geometry={nodes.Crane_Mat_FrontBuildings_0.geometry}
                            material={materials.Mat_FrontBuildings}
                        />
                    </group>
                    <group
                        position={[23.88, 0.96, 17.74]}
                        rotation={[0, -1.31, 0]}
                        scale={0.01}>
                        <mesh
                            geometry={
                                nodes.BalconyBuilding_Mat_FrontBuildings_0
                                    .geometry
                            }
                            material={materials.Mat_FrontBuildings}
                        />
                    </group>
                    <group
                        position={[4.75, 0.47, 2.3]}
                        rotation={[0, Math.PI / 8, 0]}>
                        <mesh
                            geometry={nodes.Blimp_Blimp1_0.geometry}
                            material={materials.Blimp1}
                        />
                    </group>
                    <group position={[2.39, -1.32, 1.07]}>
                        <mesh
                            geometry={
                                nodes.Build_Mid_FR_Building1_Accent2_0.geometry
                            }
                            material={materials.Building1_Accent2}
                        />
                        <mesh
                            geometry={nodes.Build_Mid_FR_Glass3_0.geometry}
                            material={materials.Glass3}
                        />
                        <mesh
                            geometry={
                                nodes.Build_Mid_FR_Alley_Track1_0.geometry
                            }
                            material={materials.Alley_Track1}
                        />
                    </group>
                    <group
                        position={[6.69, -0.73, 2.33]}
                        rotation={[0, 0.13, 0]}
                        scale={0.01}>
                        <mesh
                            geometry={
                                nodes.Build_R_BG_Mat_BackGroundBuilings_0
                                    .geometry
                            }
                            material={materials.Mat_BackGroundBuilings}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/isopotamia_trophy/scene.gltf");
