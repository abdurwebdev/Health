import React from 'react'

function Hero() {
    
  return ( 
    <div id="hero" className='flex pointer-events-none  items-center w-full absolute top-[50%] translate-x-0 translate-y-[-50%] justify-between'>
        <div id="heroright" className='min-w-[50%] mt-28  '>
            <div id="elem" className=' xl:leading-[100px] leading-[70px] xl:text-[10vw] md:leading-[110px] lg:leading-[130px]  sm:leading-[80px] text-[15vw] text-black font-bold  '>
                <h1 >AI BASED</h1>
                <h1 >HEALTH CARE</h1>
                <h1 >CHATBOT</h1>
                
            </div>
           
            
            <button className='text-black pointer-events-auto bg-white p-3 mt-[2vw]'>EXPLORE NOW</button>
        </div>
        <div id="heroleft" className='xl:w-[30%]  w-[40%] mt-24 xl:mt-20 '>  
            <p className='xl:text-[3.5vw]  text-[5vw] leading-[20px] xl:tracking-wide xl:leading-[35px] md:leading-[40px] lg:leading-[49px] sm:leading-[35px] text-black'>Transform Your Healthcare with Our AI Chatbot! Seamlessly schedule appointments, set medication reminders, and get quick health answers with our advanced AI and NLP-driven virtual assistant.</p>
        </div>
    </div>
  )
}

export default Hero