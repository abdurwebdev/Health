import { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  // use effect for the landing page animation initializing starts
  useEffect(() => {
    if (Shery) {
      Shery.imageEffect("#back", {
        style: 5,
        config: {
          a: { value: 2, range: [0, 30] },
          b: { value: -0.94, range: [-1, 1] },
          zindex: { value: -9996999, range: [-9999999, 9999999] },
          aspect: { value: 2.157303222841192 },
          ignoreShapeAspect: { value: true },
          shapePosition: { value: { x: 0, y: 0 } },
          shapeScale: { value: { x: 0.5, y: 0.5 } },
          shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
          shapeRadius: { value: 0, range: [0, 2] },
          currentScroll: { value: 0 },
          scrollLerp: { value: 0.07 },
          gooey: { value: true },
          infiniteGooey: { value: true },
          growSize: { value: 6.02, range: [1, 15] },
          durationOut: { value: 1, range: [0.1, 5] },
          durationIn: { value: 1.5, range: [0.1, 5] },
          displaceAmount: { value: 0.5 },
          masker: { value: false },
          maskVal: { value: 1.21, range: [1, 5] },
          scrollType: { value: 0 },
          geoVertex: { range: [1, 64], value: 1 },
          noEffectGooey: { value: false },
          onMouse: { value: 1 },
          noise_speed: { value: 0.2, range: [0, 10] },
          metaball: { value: 0.2, range: [0, 2] },
          discard_threshold: { value: 0.5, range: [0, 1] },
          antialias_threshold: { value: 0, range: [0, 0.1] },
          noise_height: { value: 0.5, range: [0, 2] },
          noise_scale: { value: 10, range: [0, 100] },
        },
        gooey: true,
      });
    }
  }, []);
  // use effect for the landing page animation initializing Ends

  return (
    <div>
      {/* Main Div Starts */}
      <div id="main" className="w-full h-screen ">
        {/* Back Section For Images Starts */}
        <div id="back" className="w-full h-screen pointer-events-auto ">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1502740479091-635887520276?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1611075385356-1f295304c68e?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1588543385566-413e13a51a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1628088061698-e4f4cd2969bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1587854680352-936b22b91030?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        {/* Back Section For Images Ends */}
        {/* Top Section For The Upper Content */}
        <div id="top" className="w-full h-screen absolute top-0 left-0 pointer-events-none">
          {/* Top Content All Elements Headings para and Navbar Starts */}
          <div
            id="workingarea"
            className="w-[80%] relative m-auto h-screen max-w-[1920px] "
          >
            <Navbar />
            <Hero />
          </div>
          {/* Top Content All Elements Headings para and Navbar Starts */}
        </div>
        {/* Top Section For The Upper Content Ends */}
      </div>
      {/* Main Div Ends */}
    </div>
  );
}
