import { useEffect } from "react";
import Navbar from "../components/Navbar";
import SignUp from "../components/SignUp";

export default function Signup() {
  
  useEffect(() => {
    Shery.mouseFollower({
      backgroundColor:"#000"
    });
  
   
  }, [])
  
  
  return (
    
    <div>
      <div className="w-10 h-10 bg-black fixed top-[-50px] left-0"></div>
      <div id="main" className="w-full h-[120vh]  ">
       
        <div id="top" className="w-full h-screen absolute top-0 left-0 pointer-events-none">
          <div
            id="workingarea"
            className="w-[80%] relative m-auto h-screen max-w-[1920px] "
          >
            <Navbar />
            <SignUp/>
          </div>
        </div>
      </div>
    </div>
  );
}
