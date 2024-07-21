import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

const AboutSection = () => {
  // Use effect for the mouse follower and image masker starts
  useEffect(() => {
    Shery.mouseFollower();
    Shery.imageMasker(".mask-target" /* Element to target.*/, {
      //Parameters are optional.
      mouseFollower: true,
      text: "Medical Queries",
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
    Shery.imageMasker(".mask-target2" /* Element to target.*/, {
      //Parameters are optional.
      mouseFollower: true,
      text: "Appointment Scheduling",
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
    Shery.imageMasker(".mask-target3" /* Element to target.*/, {
      //Parameters are optional.
      mouseFollower: true,
      text: "Medication Reminders",
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
    Shery.imageMasker(".mask-target4" /* Element to target.*/, {
      //Parameters are optional.
      mouseFollower: true,
      text: "Symptom Checker",
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  }, []);
// Use effect for the mouse follower and image masker ends
  return (
    <>
      {/* Top Area with Margin Auto and in Center Starts */}
      <div id="top" className="w-full h-screen  absolute top-0 left-0 pointer-events-none">
        {/* The Content on the top Starts like the navbar and About Section Content */}
        <div id="workingarea" className="w-[80%] relative m-auto h-screen max-w-[1920px] z-[999]">
          {/* NavBar Component Starts */}
          <Navbar />
          {/* NavBar Component Ends */}
          {/* About Section Starts */}
          <section className="bg-white text-gray-800 py-10 px-5 sm:px-10 md:px-20">
            <div className="container mx-auto">
              <div className="text-center mb-10">
                <h1 className="text-8xl font-bold mb-4">About AI Based Healthcare Chatbot System</h1>
                <p className="text-4xl">An innovative platform leveraging advanced technologies to connect patients with healthcare services through a chatbot interface.</p>
              </div>
              <div className="flex flex-wrap -mx-4 pointer-events-auto">
                <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 shery" data-shery="fadeInLeft">
                  <img
                    src="https://images.unsplash.com/photo-1674049406313-abb5511e0111?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Medical Queries"
                    className="w-full h-auto mask-target rounded img shadow-md"
                  />
                  <h2 className="text-2xl font-semibold mt-4">Medical Queries</h2>
                  <p className="text-lg font-[gilroy] mt-2">Users can ask medical questions and receive accurate information and advice from the chatbot using NLP algorithms.</p>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 shery" data-shery="fadeInRight">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1702599160474-22e21180b230?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Appointment Scheduling"
                    className="w-full h-auto mask-target2 rounded img shadow-md"
                  />
                  <h2 className="text-2xl font-semibold mt-4">Appointment Scheduling</h2>
                  <p className="text-lg font-[gilroy] mt-2">Schedule appointments with healthcare providers, check availability, select suitable time slots, and confirm appointments through the chatbot.</p>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 shery" data-shery="fadeInLeft">
                  <img
                    src="https://images.unsplash.com/photo-1624711076872-ecdbc5ade023?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Medication Reminders"
                    className="w-full h-auto mask-target3 rounded img shadow-md"
                  />
                  <h2 className="text-2xl font-semibold mt-4">Medication Reminders</h2>
                  <p className="text-lg font-[gilroy] mt-2">Set up medication reminders through the chatbot to ensure timely medication doses, with customizable reminder settings based on medication schedules.</p>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 shery" data-shery="fadeInRight">
                  <img
                    src="https://images.unsplash.com/photo-1583911300368-34202d644997?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Symptom Checker"
                    className="w-full h-auto mask-target4 rounded img shadow-md"
                  />
                  <h2 className="text-2xl font-semibold mt-4">Symptom Checker</h2>
                  <p className="text-lg font-[gilroy] mt-2">Describe symptoms to the chatbot to receive triage suggestions, including self-care measures or recommendations to seek medical attention.</p>
                </div>
              </div>
            </div>
          </section>
          {/* About Section Ends */}
        </div>
        {/* The Content on the top Starts like the navbar and About Section Content Ends */}
      </div>
      {/* Top Area Ends */}
    </>
  );
};

export default AboutSection;
