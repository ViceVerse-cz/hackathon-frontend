import { Canvas, Float16BufferAttributeProps, ThreeElements, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { useBuilding } from '../../../../../contexts/building';

function Box(props: Float16BufferAttributeProps) {
    const mesh = useRef() as React.MutableRefObject<Float16BufferAttributeProps>;

    const [active, setActive] = useState(props.active)

    useEffect(() => {
        setActive(props.active)
    }, [props]);

    // Animate box on every frame
    useFrame((state, _) => (
        mesh.current.rotation.y += 0.003
    ));

    // Set background color on every frame
    useFrame((state, _) => (
        state.gl.setClearColor("#1e293b")
    ));

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={2}
            onClick={props.onSelected}
        >
            <boxGeometry args={[1, 0.45, 1]} />

            <meshStandardMaterial color={
                !active
                    ? '#4b5563'
                    : '#8B5CF6'
            } />
        </mesh>
    )
}

function Separator(props: Float16BufferAttributeProps) {
    const mesh = useRef() as React.MutableRefObject<Float16BufferAttributeProps>;

    // Animate box on every frame
    useFrame((state, _) => (
        mesh.current.rotation.y += 0.003
    ));

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={2}
        >
            <boxGeometry args={[1, 0.06, 1]} />
            <meshStandardMaterial color={'#64748b'} />
        </mesh>
    )
}

export default () => {
    const [active, setActive] = useState<Number>(0);
    const { buildingData, loading } = useBuilding();



    return (
        <Canvas>
            <pointLight position={[0, 0, 5]} />

            {!loading ?
                buildingData.building.floors.map((_, i) => (
                    <>
                        <Box
                            key={i}
                            active={active == i}
                            position={[0, i - 2.51, 0]}
                            onSelected={() => setActive(i)}
                        />
                        <Separator position={[0, i - 2, 0]} />
                    </>
                ))
                : null

            }

            <mesh position={[0, -2.56, 0]}
                scale={2}
            >
                <boxGeometry args={[5.5, 0.1, 2]} />
                <meshStandardMaterial color={"#1e293b"} />
            </mesh>
        </Canvas>
    )
}
