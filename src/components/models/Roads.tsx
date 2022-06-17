import { useRef } from "react";
import * as THREE from "three";
import RoadStraight from "./roads/RoadStraight";
import RoadCross from "./roads/RoadCross";
import RoadT from "./roads/RoadT";
import RoadLeft from "./roads/RoadLeft";

export const Roads = ({ ...props }: JSX.IntrinsicElements["group"]) => {
    const ref = useRef<THREE.Group>(null);
    return (
        <group ref={ref} {...props} receiveShadow>
            <RoadStraight
                rotation={[0, Math.PI / 2, 0]}
                scale={2.5}
                position={[50, 0, 125]}
            />
            <RoadStraight
                rotation={[0, Math.PI / 2, 0]}
                scale={2.5}
                position={[200, 0, 125]}
            />
            <RoadStraight
                rotation={[0, Math.PI / 2, 0]}
                scale={2.5}
                position={[350, 0, 125]}
            />
            <RoadStraight
                rotation={[0, Math.PI, 0]}
                scale={2.5}
                position={[275, 0, 50]}
            />
            <RoadStraight
                rotation={[0, Math.PI, 0]}
                scale={2.5}
                position={[125, 0, 50]}
            />
            <RoadStraight
                rotation={[0, Math.PI, 0]}
                scale={2.5}
                position={[125, 0, 200]}
            />
            <RoadStraight
                rotation={[0, Math.PI / 2, 0]}
                scale={2.5}
                position={[50, 0, 275]}
            />
            <RoadStraight
                rotation={[0, Math.PI / 2, 0]}
                scale={2.5}
                position={[350, 0, 275]}
            />
            <RoadStraight
                rotation={[0, Math.PI / 2, 0]}
                scale={2.5}
                position={[50, 0, 425]}
            />
            <RoadStraight
                rotation={[0, Math.PI / 2, 0]}
                scale={2.5}
                position={[50, 0, 575]}
            />
            <RoadStraight
                rotation={[0, Math.PI / 2, 0]}
                scale={2.5}
                position={[350, 0, 575]}
            />
            <RoadStraight
                rotation={[0, Math.PI / 2, 0]}
                scale={2.5}
                position={[200, 0, 275]}
            />
            <RoadStraight
                rotation={[0, Math.PI / 2, 0]}
                scale={2.5}
                position={[200, 0, 725]}
            />
            <RoadStraight
                rotation={[0, Math.PI, 0]}
                scale={2.5}
                position={[125, 0, 650]}
            />
            <RoadStraight
                rotation={[0, Math.PI, 0]}
                scale={2.5}
                position={[125, 0, 500]}
            />
            <RoadStraight
                rotation={[0, Math.PI, 0]}
                scale={2.5}
                position={[125, 0, 350]}
            />
            <RoadStraight
                rotation={[0, Math.PI, 0]}
                scale={2.5}
                position={[275, 0, 350]}
            />
            <RoadStraight
                rotation={[0, Math.PI, 0]}
                scale={2.5}
                position={[275, 0, 425]}
            />
            <RoadStraight
                rotation={[0, Math.PI, 0]}
                scale={2.5}
                position={[275, 0, 500]}
            />
            <RoadStraight
                rotation={[0, Math.PI, 0]}
                scale={2.5}
                position={[275, 0, 650]}
            />
            <RoadStraight
                rotation={[0, Math.PI, 0]}
                scale={2.5}
                position={[275, 0, 800]}
            />
            <RoadCross scale={2.5} position={[-275, 0, 75]} />
            <RoadCross scale={2.5} position={[-275, 0, -75]} />
            <RoadT
                rotation={[0, Math.PI, 0]}
                scale={2.5}
                position={[475, 0, 525]}
            />
            <RoadT rotation={[0, 0, 0]} scale={2.5} position={[75, 0, -125]} />
            <RoadT
                rotation={[0, -Math.PI / 2, 0]}
                scale={2.5}
                position={[525, 0, 225]}
            />
            <RoadT
                rotation={[0, -Math.PI / 2, 0]}
                scale={2.5}
                position={[525, 0, 375]}
            />
            <RoadT
                rotation={[0, Math.PI / 2, 0]}
                scale={2.5}
                position={[-125, 0, 775]}
            />
            <RoadT
                rotation={[0, -Math.PI / 2, 0]}
                scale={2.5}
                position={[675, 0, 525]}
            />
            <RoadLeft
                rotation={[0, Math.PI / 2, 0]}
                scale={2.5}
                position={[-275, 0, 1125]}
            />
        </group>
    );
};
