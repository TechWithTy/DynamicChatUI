"use client";
import React, { Suspense, useRef, FunctionComponent } from "react";

// Lazy load the Spline component
const Spline = React.lazy(() => import("@splinetool/react-spline"));

// Define an interface for your component's props
interface AppProps {
  sceneUrl: string; // Type for the sceneUrl prop
}

// Apply TypeScript typing for your functional component using the AppProps interface
const SplineSceneComponent: FunctionComponent<AppProps> = ({ sceneUrl }) => {
  // Use useRef to keep a reference to the cube, typing the ref with any to accommodate dynamic object properties
  const sphere = useRef<any>(null);

  // This function is called once the Spline scene is loaded, type the parameter as any for maximum flexibility with Spline library
  function onLoad(spline: any) {
    // Find the object by name within the Spline scene
    const obj = spline.findObjectByName("Sphere");
    sphere.current = obj; // Assign the object to the ref
  }

  // Function to move the cube on button click
  function moveObj() {
    // Check if the cube reference exists and then modify its position
    if (sphere.current) {
      sphere.current.position.x += 10;
    }
  }

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* Use the sceneUrl prop to dynamically set the Spline scene */}
        <Spline scene={sceneUrl} onLoad={onLoad} />
      </Suspense>
      <button type="button" onClick={moveObj}>
        Move Cube
      </button>
    </div>
  );
};

export default SplineSceneComponent;
