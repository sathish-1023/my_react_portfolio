import React,{Suspense,useEffect,useState} from 'react'
import {Canvas} from '@react-three/fiber';
import {OrbitControls,Preload,useGLTF} from '@react-three/drei';
import CanvasLoader from '../Loader';
const Computers = ({isMobile}) => {
  const computer= useGLTF('./desktop_pc/scene.gltf')
  
  return (
  <mesh>
  <hemisphereLight intensity={1} groundColor='white'/>
  <pointLight intensity={1} />
  <spotLight  
    position={[-20,50,10]}
    angle={0.12}
    penumbra={1}
    intensity={1}
    castShadow
    shadow-mapSize={1024}

    />
    <primitive 
      object={computer.scene}
      scale={isMobile?0.6:0.75}
      position={isMobile?[0,-3,-2.0]:[0,-3.3,-1.5]}
      rotation={[-0.01,-0.2,-0.1]}
    />
  </mesh>
  )
}
 
const ComputersCanvas=()=>{
  const [isMobile,setIsMobile]=useState(false);

  useEffect(() => {
   //Add Listener for the screen change
   const mediaQuery=window.matchMedia('(max-width:500px)');

    //set the intial value of isMobile variable
    setIsMobile(mediaQuery.matches)
    //Define a call back function to handle media query
    const handleMediaQueryChange=(event)=>{
      setIsMobile(mediaQuery.matches);
    }

   //add event listener for changes in media queru
   mediaQuery.addEventListener('change',handleMediaQueryChange);
    //remove the event listener when component  is mounted
      return () =>{
        mediaQuery.removeEventListener('change',handleMediaQueryChange);
      }
  }, []);
  return(
    <Canvas
     frameloop='demand'
     shadows
     camera={{position:[20,3,5],fov:25}}
     gl={{preserveDrawingBuffer:true}}
     >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all/>
      </Canvas>
  )
}
export default ComputersCanvas;
