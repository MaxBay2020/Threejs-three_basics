import {Canvas, useFrame} from "@react-three/fiber";
import Box from "./Box";


function App() {


  return (
    <div className="App">
      <Canvas>
          <ambientLight intensity={0.1} />
          <pointLight position={[10,10,10]} />
          <directionalLight color='red' position={[0,0,5]} />

          <Box position={[-2, 0, 0]} />
          <Box position={[2, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
