import React, { useRef } from "react";
import { Parcel } from ".";
import Commodore from "./Commodore";
import { Ground } from "./Ground";
import { Roads } from "./Roads";
import { Park } from "./Park";

export const Topography = ({ ...props }: JSX.IntrinsicElements["group"]) => {
  const ref = useRef<THREE.Group>(null);
  return (
    //[400, 20, 900]
    <group ref={ref} {...props}>
      <Commodore scale={20} position={[75, 50, 0]} />
      <Parcel position={[50, 0, 50]} /> {/** 1 */}
      <Roads></Roads>
      <Parcel position={[200, 0, 50]} /> {/** 2 */}
      <Parcel position={[350, 0, 50]} /> {/** 3 */}
      <Parcel position={[50, 0, 200]} /> {/** 4 */}
      <Parcel position={[275, 0, 200]} scale={[2.5, 2, 1]} /> {/** 5 */}
      <Parcel position={[50, 0, 350]} /> {/** 7 */}
      <Parcel position={[350, 0, 425]} scale={[1, 2, 2.5]} /> {/** 9 */}
      <Parcel position={[50, 0, 500]} /> {/** 10 */}
      {/* PARK */}
      {/* <Parcel position={[200, 100, 500]} scale={[1, 0.5, 4]} /> */}
      <Park></Park>
      <Parcel position={[350, 0, 500]} /> {/** 10 */}
      {/** 11 */}
      <Parcel position={[125, 0, 800]} scale={[2.5, 2, 1]} /> {/** 14 */}
      <Parcel position={[50, 0, 725]} scale={[1, 2, 2.5]} /> {/** 14 */}
      <Parcel position={[350, 0, 725]} scale={[1, 2, 2.5]} /> {/** 16 */}
      {/* <Ground /> */}
    </group>
  );
};
