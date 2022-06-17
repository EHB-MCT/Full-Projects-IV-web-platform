import React, { MutableRefObject, useRef, useState } from "react";
import { Parcel } from ".";
import Commodore from "./Commodore";
import { Ground } from "./Ground";
import { Roads } from "./Roads";
import { Park } from "./Park";
import { ThreeEvent, useThree } from "react-three-fiber";
import gsap, { Power4 } from "gsap/all";
import { Mesh, Object3D, Quaternion, Vector3 } from "three";
import { getTargetOrientation } from "../../animations/animations";
import { start } from "repl";
import Cars from "./Cars";

export const Topography = ({ ...props }: JSX.IntrinsicElements["group"]) => {
    const ref = useRef<THREE.Group>(null);
    const boxRef = useRef<Mesh>(null);
    const { camera } = useThree();
    const [animations, setAnimations] = useState({
        isActive: false,
        lastAnimation: "",
    });

    const animateBack = (event: ThreeEvent<MouseEvent>) => {
        const startPosition = camera.position.clone();

        const tl = gsap.timeline({
            onComplete() {
                setAnimations((prevState) => ({
                    ...prevState,
                    isActive: false,
                }));
            },
            onStart() {
                setAnimations((prevState) => ({
                    isActive: true,
                    lastAnimation: "",
                }));
            },
        });
        switch (animations.lastAnimation) {
            case "":
                break;
            case "Ani1":
                tl.to(camera.position, {
                    y: 300,
                    duration: 3,
                })
                    .to(
                        {},
                        {
                            duration: 1,
                            onUpdate() {
                                camera.quaternion.slerp(
                                    getTargetOrientation(
                                        new Vector3(
                                            startPosition.x,
                                            300,
                                            startPosition.z
                                        ),
                                        new Vector3(0, 0, 0),
                                        new Vector3(0, 1, 0)
                                    ),
                                    this.progress()
                                );
                            },
                        }
                    )
                    .to(camera.position, {
                        x: 600,
                        z: 200,
                        duration: 2,
                        onUpdate() {
                            camera.lookAt(new Vector3(0, 0, 0));
                        },
                    });
                break;
            default:
                break;
        }
    };

    const animate = (event: ThreeEvent<MouseEvent>) => {
        if (animations.isActive) return;
        if (animations.lastAnimation === "Ani1") return animateBack(event);

        const position = new Vector3();
        const crossPos = new Vector3();

        event.object.getWorldPosition(position);
        boxRef.current?.getWorldPosition(crossPos);

        console.log(boxRef.current);

        const tl = gsap.timeline({
            onComplete() {
                setAnimations((prevState) => ({
                    lastAnimation: "Ani1",
                    isActive: false,
                }));
            },
        });
        tl.to(camera.position, {
            x: 300,
            y: 20,
            z: 275,
            duration: 2.5,
            ease: Power4.easeIn,
            onUpdate() {
                camera.lookAt(crossPos.x, crossPos.y, crossPos.z);
            },
            onStart() {
                setAnimations((prevState) => ({
                    ...prevState,
                    isActive: true,
                }));
            },
        })

            .to(camera.position, {
                x: 170,
                duration: 2,
                onUpdate() {
                    camera.lookAt(crossPos);
                },
            })
            .to(camera.position, {
                duration: 1,
                onUpdate() {
                    camera.quaternion.slerp(
                        getTargetOrientation(
                            new Vector3(170, 20, 275),
                            position,
                            event.object.up
                        ),
                        this.progress()
                    );
                },
            })
            .to(camera.position, {
                z: -300,
                duration: 3.5,
                onUpdate() {
                    camera.lookAt(position);
                },
            })
            .to(camera.position, {
                x: 150,
                y: 150,
                duration: 2,
                ease: Power4.easeOut,
                onUpdate() {
                    camera.quaternion.slerp(
                        getTargetOrientation(
                            new Vector3(150, 150, -300),
                            position,
                            event.object.up
                        ),
                        this.progress()
                    );
                },
            });
    };

    return (
        //[400, 20, 900]
        <group ref={ref} {...props}>
            <Commodore scale={20} position={[75, 50, 0]} />
            {/* <Parcel position={[50, 0, 50]} /> */}
            <Roads></Roads>
            {/* <Parcel position={[200, 0, 50]} />
            <Parcel position={[350, 0, 50]} />
            <Parcel position={[50, 0, 200]} /> */}
            {/* <Parcel position={[275, 0, 200]} scale={[2.5, 2, 1]} /> * 5 */}
            {/* <Parcel position={[50, 0, 350]} />
            <Parcel position={[350, 0, 425]} scale={[1, 2, 2.5]} />
            <Parcel position={[50, 0, 500]} /> */}
            {/* <Parcel position={[200, 100, 500]} scale={[1, 0.5, 4]} /> */}
            <Park></Park>
            {/* <Parcel position={[350, 0, 500]} />
            <Parcel position={[125, 0, 800]} scale={[2.5, 2, 1]} />
            <Parcel position={[50, 0, 725]} scale={[1, 2, 2.5]} />
            <Parcel
                position={[350, 0, 725]}
                scale={[1, 2, 2.5]}
                onClick={animate}
            />
            <mesh position={[150, 20, 125]} ref={boxRef}>
                <boxBufferGeometry args={[20, 20, 20]} />
                <meshNormalMaterial />
            </mesh> */}
            <Cars />
            {/* <Ground /> */}
        </group>
    );
};
