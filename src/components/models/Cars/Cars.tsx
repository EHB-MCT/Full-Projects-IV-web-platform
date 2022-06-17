import React from "react";
import { Camaro } from "./Camaro";
import { Delorean } from "./Delorean";
import { Fiat } from "./Fiat";
import { PoliceCar } from "./PoliceCar";
import { RaceToyota } from "./RaceToyota";
import { Toyota } from "./Toyota";
import { Van } from "./Van";

const Cars = () => {
    return (
        <group>
            <Toyota scale={0.09} position={[120, 0, 500]} />
            <RaceToyota scale={12} />
            <Delorean scale={6} />
            <Van scale={8} />
            <Fiat scale={12} />
            <Camaro scale={1000} />
            <PoliceCar />
        </group>
    );
};

export default Cars;
