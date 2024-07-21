import React, { useState } from 'react'
import Marquee from "react-fast-marquee";
function SignUp() {
    const [doc, setdoc] = useState(true);
    const [pat, setpat] = useState(true);
    const [admin, setadmin] = useState(true);
   const showDoctor = () =>{
    var docs=document.getElementById("doc");
    if(doc)
    {
        docs.style.opacity=0;
        setdoc(false);
    }
    else
    {
        docs.style.opacity=1;
        setdoc(true);
    }
    
   }
   const showPatient= () =>{
    var pate=document.getElementById("patient");
    if(pat)
    {
        pate.style.opacity=0;
        setpat(false);
    }
    else
    {
        pate.style.opacity=1;
        setpat(true);
    }
   }
   const showAdmin = () =>{
    var admn=document.getElementById("admin");
    if(admin)
    {
        admn.style.opacity=0;
        setadmin(false);
    }
    else
    {
        admn.style.opacity=1;
        setadmin(true);
    }
   }
    
  return (
    <>
    <div className='flex items-center pointer-events-auto justify-center'>
        <div className='flex gap-x-5'>
        <button className="button-34  mb-10" onClick={showPatient}role="button">Patient</button>
    <button  className="button-33 mb-10" role="button" onClick={showDoctor}>Doctor</button>
    <button  className="button-33 mb-10" role="button" onClick={showAdmin}>Admin</button>
    </div>
    </div>
    <div className='xl:flex relative xl:items-center xl:justify-center w-full flex flex-col items-center justify-center gap-5'>
        <div id='patient' className='w-[100%] xl:w-[60%] opacity-0 h-[70vh] glass'>
            <h1>Patient</h1>
        </div>
        <div id='doc' className='w-[100%] top-0 left-[204px] xl:w-[60%] absolute h-[70vh] glass opacity-0 '>
            <h1>Doctor</h1>
        </div>
        <div id='admin' className='w-[100%] top-0 left-[204px] xl:w-[60%] absolute h-[70vh] glass opacity-0 '>
            <h1>Admin</h1>
        </div>
        <Marquee>
            <h1 className='text-[4vw]'> Welcome! Access personalized health tips, book appointments, and manage health records. Sign up for a free consultation. Stay hydrated, exercise, and eat well. Contact our 24/7 support team for help.

</h1>
 
</Marquee>
    </div>
    </>
  )
}

export default SignUp i want to show one at a time such that the default page is patient and when i click on doctor the patient z index becomes -1 and doctor z index becomes 99999 also when the opacity is 1 the give the class of button to button34?