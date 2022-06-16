/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Artem P (https://sketchfab.com/temp0.crazy)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/ocean-view-hotel-gta-vice-city-f3b5a3102bce454881836bdb4a31273a
title: Ocean View hotel (GTA Vice City)
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        main_0: THREE.Mesh;
        main_1: THREE.Mesh;
        main_2: THREE.Mesh;
        main_3: THREE.Mesh;
        main_4: THREE.Mesh;
        main_5: THREE.Mesh;
        main_6: THREE.Mesh;
        roof_0: THREE.Mesh;
        roof_1: THREE.Mesh;
        windows_0: THREE.Mesh;
        windows_1: THREE.Mesh;
        windows_2: THREE.Mesh;
        windows_3: THREE.Mesh;
        roof_down_0: THREE.Mesh;
        roof_down_1: THREE.Mesh;
        roof_down_2: THREE.Mesh;
        additional_0: THREE.Mesh;
        additional_1: THREE.Mesh;
        additional_2: THREE.Mesh;
        add_0: THREE.Mesh;
        add_1: THREE.Mesh;
        out_floor_0: THREE.Mesh;
        out_floor_1: THREE.Mesh;
        out_floor_back_0: THREE.Mesh;
        backdoor_0: THREE.Mesh;
        backdoor_1: THREE.Mesh;
        backdoor_2: THREE.Mesh;
        backdoor_3: THREE.Mesh;
        backdoor_4: THREE.Mesh;
        backdoor_5: THREE.Mesh;
        backdoor_6: THREE.Mesh;
        wall_0: THREE.Mesh;
        wall_1: THREE.Mesh;
        ocean_view_0: THREE.Mesh;
        front_door_0: THREE.Mesh;
        front_door_1: THREE.Mesh;
        front_door_2: THREE.Mesh;
        front_door_3: THREE.Mesh;
        ladder_front_0: THREE.Mesh;
        ladder_front_1: THREE.Mesh;
        wall_back_0: THREE.Mesh;
        wall_back_1: THREE.Mesh;
        ladder_back_0: THREE.Mesh;
        ladder_back_1: THREE.Mesh;
        cond_2_0: THREE.Mesh;
        cond_1_0: THREE.Mesh;
    };
    materials: {
        wall_main: THREE.MeshStandardMaterial;
        tilewall: THREE.MeshStandardMaterial;
        tilesfront: THREE.MeshStandardMaterial;
        trim: THREE.MeshStandardMaterial;
        bord: THREE.MeshStandardMaterial;
        wall_bot: THREE.MeshStandardMaterial;
        trim_2: THREE.MeshStandardMaterial;
        roof: THREE.MeshStandardMaterial;
        windows_1: THREE.MeshStandardMaterial;
        windows_2: THREE.MeshStandardMaterial;
        wall: THREE.MeshStandardMaterial;
        Point: THREE.MeshStandardMaterial;
        tile_floor_1: THREE.MeshStandardMaterial;
        black: THREE.MeshStandardMaterial;
        sign_1: THREE.MeshStandardMaterial;
        backwall: THREE.MeshStandardMaterial;
        ["door_b.png"]: THREE.MeshStandardMaterial;
        garage_door: THREE.MeshStandardMaterial;
        sign_2: THREE.MeshStandardMaterial;
        wall_out: THREE.MeshStandardMaterial;
        pink: THREE.MeshStandardMaterial;
        door_front: THREE.MeshStandardMaterial;
        stripe: THREE.MeshStandardMaterial;
        ladder: THREE.MeshStandardMaterial;
        cond: THREE.MeshStandardMaterial;
        CONDITIONER: THREE.MeshStandardMaterial;
    };
};

export function Hotel({ ...props }: JSX.IntrinsicElements["group"]) {
    const group = useRef<THREE.Group>(null);
    const { nodes, materials } = useGLTF(
        "/ocean_view_hotel_gta_vice_city/scene.gltf"
    ) as GLTFResult;
    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group position={[9.14, 0.1, -2.49]}>
                    <mesh
                        geometry={nodes.main_0.geometry}
                        material={materials.wall_main}
                    />
                    <mesh
                        geometry={nodes.main_1.geometry}
                        material={materials.tilewall}
                    />
                    <mesh
                        geometry={nodes.main_2.geometry}
                        material={materials.tilesfront}
                    />
                    <mesh
                        geometry={nodes.main_3.geometry}
                        material={materials.trim}
                    />
                    <mesh
                        geometry={nodes.main_4.geometry}
                        material={materials.bord}
                    />
                    <mesh
                        geometry={nodes.main_5.geometry}
                        material={materials.wall_bot}
                    />
                    <mesh
                        geometry={nodes.main_6.geometry}
                        material={materials.trim_2}
                    />
                </group>
                <group position={[9.14, 0.1, -2.49]}>
                    <mesh
                        geometry={nodes.roof_0.geometry}
                        material={materials.roof}
                    />
                    <mesh
                        geometry={nodes.roof_1.geometry}
                        material={materials.trim}
                    />
                </group>
                <group position={[9.14, 0.1, -2.49]}>
                    <mesh
                        geometry={nodes.windows_0.geometry}
                        material={materials.bord}
                    />
                    <mesh
                        geometry={nodes.windows_1.geometry}
                        material={materials.windows_1}
                    />
                    <mesh
                        geometry={nodes.windows_2.geometry}
                        material={materials.windows_2}
                    />
                    <mesh
                        geometry={nodes.windows_3.geometry}
                        material={materials.wall}
                    />
                </group>
                <group position={[9.14, 0.1, -2.49]}>
                    <mesh
                        geometry={nodes.roof_down_0.geometry}
                        material={materials.wall}
                    />
                    <mesh
                        geometry={nodes.roof_down_1.geometry}
                        material={materials.bord}
                    />
                    <mesh
                        geometry={nodes.roof_down_2.geometry}
                        material={materials.trim_2}
                    />
                </group>
                <group position={[9.14, 0.1, -2.49]}>
                    <mesh
                        geometry={nodes.additional_0.geometry}
                        material={materials.tilesfront}
                    />
                    <mesh
                        geometry={nodes.additional_1.geometry}
                        material={materials.trim}
                    />
                    <mesh
                        geometry={nodes.additional_2.geometry}
                        material={materials.bord}
                    />
                </group>
                <group position={[9.14, 0.1, -2.49]}>
                    <mesh
                        geometry={nodes.add_0.geometry}
                        material={materials.trim_2}
                    />
                    <mesh
                        geometry={nodes.add_1.geometry}
                        material={materials.bord}
                    />
                </group>
                <group position={[9.14, 0.1, -2.49]}>
                    <mesh
                        geometry={nodes.out_floor_0.geometry}
                        material={materials.Point}
                    />
                    <mesh
                        geometry={nodes.out_floor_1.geometry}
                        material={materials.tile_floor_1}
                    />
                </group>
                <group position={[9.14, 0.1, -2.49]}>
                    <mesh
                        geometry={nodes.out_floor_back_0.geometry}
                        material={materials.Point}
                    />
                </group>
                <group position={[9.14, 0.1, -2.49]}>
                    <mesh
                        geometry={nodes.backdoor_0.geometry}
                        material={materials.black}
                    />
                    <mesh
                        geometry={nodes.backdoor_1.geometry}
                        material={materials.sign_1}
                    />
                    <mesh
                        geometry={nodes.backdoor_2.geometry}
                        material={materials.backwall}
                    />
                    <mesh
                        geometry={nodes.backdoor_3.geometry}
                        material={materials.bord}
                    />
                    <mesh
                        geometry={nodes.backdoor_4.geometry}
                        material={materials["door_b.png"]}
                    />
                    <mesh
                        geometry={nodes.backdoor_5.geometry}
                        material={materials.garage_door}
                    />
                    <mesh
                        geometry={nodes.backdoor_6.geometry}
                        material={materials.sign_2}
                    />
                </group>
                <group position={[9.14, 0.1, -2.49]}>
                    <mesh
                        geometry={nodes.wall_0.geometry}
                        material={materials.bord}
                    />
                    <mesh
                        geometry={nodes.wall_1.geometry}
                        material={materials.wall_out}
                    />
                </group>
                <group
                    position={[17.71, -5.67, 0.38]}
                    rotation={[Math.PI / 2, Math.PI / 2, 0]}
                    scale={1.4}>
                    <mesh
                        geometry={nodes.ocean_view_0.geometry}
                        material={materials.pink}
                    />
                </group>
                <group position={[9.14, 0.1, -2.49]}>
                    <mesh
                        geometry={nodes.front_door_0.geometry}
                        material={materials.bord}
                    />
                    <mesh
                        geometry={nodes.front_door_1.geometry}
                        material={materials.door_front}
                    />
                    <mesh
                        geometry={nodes.front_door_2.geometry}
                        material={materials.black}
                    />
                    <mesh
                        geometry={nodes.front_door_3.geometry}
                        material={materials.tile_floor_1}
                    />
                </group>
                <group position={[9.14, 0.1, -2.49]}>
                    <mesh
                        geometry={nodes.ladder_front_0.geometry}
                        material={materials.Point}
                    />
                    <mesh
                        geometry={nodes.ladder_front_1.geometry}
                        material={materials.trim_2}
                    />
                </group>
                <group position={[9.14, 0.1, -2.49]}>
                    <mesh
                        geometry={nodes.wall_back_0.geometry}
                        material={materials.wall_out}
                    />
                    <mesh
                        geometry={nodes.wall_back_1.geometry}
                        material={materials.stripe}
                    />
                </group>
                <group position={[9.14, 0.1, -2.49]}>
                    <mesh
                        geometry={nodes.ladder_back_0.geometry}
                        material={materials.wall_out}
                    />
                    <mesh
                        geometry={nodes.ladder_back_1.geometry}
                        material={materials.ladder}
                    />
                </group>
                <group position={[-15.07, 20.74, 7.36]} scale={1.81}>
                    <mesh
                        geometry={nodes.cond_2_0.geometry}
                        material={materials.cond}
                    />
                </group>
                <group position={[-6.79, 20.74, 17.25]} scale={1.81}>
                    <mesh
                        geometry={nodes.cond_1_0.geometry}
                        material={materials.CONDITIONER}
                    />
                </group>
                <group position={[-12.14, 9.73, 13.62]} />
            </group>
        </group>
    );
}

useGLTF.preload("/ocean_view_hotel_gta_vice_city/scene.gltf");
