import { Camera, Vector3 } from "react-three-fiber";

import * as THREE from "three";

export const animateCameraWhileLooking = (
    camera: Camera,
    target: Vector3,
    position: Vector3,
    duration: number
) => {};

export const getTargetOrientation = (
    startPosition: THREE.Vector3,
    targetPosition: THREE.Vector3,
    targetUp: THREE.Vector3
) => {
    const rotationMatrix = new THREE.Matrix4();
    rotationMatrix.lookAt(startPosition, targetPosition, targetUp);

    const targetOrientation = new THREE.Quaternion().setFromRotationMatrix(
        rotationMatrix
    );

    return targetOrientation;
};

// const animateToCinema = (event: ThreeEvent<MouseEvent>) => {
//     console.log(hasAnimated);
//     if (hasAnimated) return;
//     event.stopPropagation();
//     setHasAnimated(true);
//     setEnableOrbit(false);

//     const worldPosition = new THREE.Vector3();
//     event.object.getWorldPosition(worldPosition);

//     if (currentTarget !== worldPosition) {
//         setCurrentTarget(worldPosition);

//         setMinDistance(300);

//         gsap.to(camera.position, {
//             x: worldPosition.x + 40,
//             y: 35,
//             z: worldPosition.z - 50,
//             duration: 1.5,
//             ease: Power4.easeInOut,
//         });
//     } else {
//         setMinDistance(700);
//         setCurrentTarget([0, 0, 0]);
//         gsap.to(camera.position, {
//             x: 0,
//             y: 100,
//             z: 0,
//             duration: 1.5,
//             ease: Power4.easeInOut,
//             onComplete() {},
//         });
//     }
//     setEnableOrbit(true);
// };

// const animateBack = (e: MouseEvent) => {
//     console.log(camera.position);
//     if (!hasAnimated) return;
//     setEnableOrbit(false);

//     const rotationMatrix = new THREE.Matrix4();
//     rotationMatrix.lookAt(
//         camera.position,
//         new THREE.Vector3(0, 0, 0),
//         new THREE.Vector3(200, 200, 200)
//     );

//     const targetOrientation = new THREE.Quaternion().setFromRotationMatrix(
//         rotationMatrix
//     );

//     const tl = gsap.timeline({
//         paused: true,
//         onComplete() {
//             setEnableOrbit(true);
//             setHasAnimated(false);
//         },
//     });
//     tl.to(
//         {},
//         {
//             duration: 1,
//             onUpdate() {
//                 camera.quaternion.slerp(targetOrientation, this.progress());
//             },
//             onComplete() {
//                 setCurrentTarget([0, 0, 0]);
//                 setMinDistance(700);
//             },
//         }
//     )
//         .to(camera.position, {
//             x: 400,
//             y: 700,
//             z: 0,
//             duration: 2,
//             ease: Power3.easeIn,
//             onUpdate() {
//                 camera.lookAt(new THREE.Vector3(0, 0, 0));
//             },
//         })
//         .to(camera.position, {
//             x: 300,
//             y: 300,
//             z: 300,
//             duration: 2,
//             ease: Power3.easeOut,
//             onUpdate() {
//                 camera.lookAt(new THREE.Vector3(0, 0, 0));
//             },
//         });
//     tl.play();
// };
