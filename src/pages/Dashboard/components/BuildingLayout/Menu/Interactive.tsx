import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';

interface IBoxProps {
  position: [number, number, number],
  active: boolean,
  onSelected: () => void
}

function Box(props: IBoxProps) {
  const mesh = useRef()

  const [active, setActive] = useState(props.active)

  useEffect(() => {
    setActive(props.active)
  }, [props]);

  // Animate box on every frame
  useFrame((state, _) => (
    // @ts-ignore
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

interface ISeparatorProps {
  position: [number, number, number],
}

function Separator(props: ISeparatorProps) {
  const mesh = useRef();

  // Animate box on every frame
  useFrame((state, _) => (
    // @ts-ignore
    mesh.current.rotation.y += 0.003
  ));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={2}
    >
      <boxGeometry args={[1, 0.06, 1]} />
      <meshStandardMaterial color={'#64748b'}/>
    </mesh>
  )
}

export default () => {
  const [active, setActive] = useState<Number>(0);

  return (
    <Canvas>
      <pointLight position={[0, 0, 5]} />

      {
        [...Array(1)].map((_, i) => (
          <>
            <Box 
              key={i} 
              active={active == i} 
              position={[0, i - 2.51, 0]}
              onSelected={() => setActive(i)}
            />
            <Separator position={[0, i - 2, 0]}/>
          </>
        ))
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
