import React, {useRef, useState} from 'react';
import {useFrame} from "@react-three/fiber";

const Box = ({position}) => {
    const meshRef = useRef()
    const [isHover, setIsHover] = useState(false)
    const [isActive, setIsActive] = useState(false)

    useFrame((state, delta) => {
        meshRef.current.rotation.x += 0.01
    })

    return (
        <>
            <mesh
                position={position}
                ref={meshRef}
                onClick={()=>setIsActive(!isActive)}
                onPointerOver={()=>setIsHover(true)}
                onPointerOut={()=>setIsHover(false)}
                scale={isActive ? 1.5 : 1}
            >

                {/* shape options */}
                <boxGeometry args={[3,3,3]} />
                {/*<sphereGeometry />*/}
                {/*<octahedronGeometry args={[2,2,2]} />*/}

                {/* material options */}
                <meshStandardMaterial color={isHover ? 'teal' : 'tomato'} />
                {/*<meshNormalMaterial color={isHover ? 'teal' : 'tomato'} />*/}
                {/*<meshBasicMaterial color={isHover ? 'teal' : 'tomato'} />*/}
            </mesh>
        </>
    );
};

export default Box;
